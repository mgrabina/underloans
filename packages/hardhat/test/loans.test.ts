import { expect } from 'chai'
import { ethers } from 'hardhat'

import {
  LendingProtocol,
  LendingProtocol__factory,
  USDC,
  USDC__factory,
  VerifySig,
  VerifySig__factory,
} from '../typechain-types'
import { AbiCoder, keccak256, parseUnits, toBeArray } from 'ethers'

describe('LendingProtocol', function () {
  let lendingProtocol: LendingProtocol
  let verifySig: VerifySig
  let erc20: USDC
  let owner: any, addr1: any, addr2: any, addr3: any

  const initialSupply = ethers.parseEther('10000')
  const backendPrivateKey = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef' // Example key
  const backendSigner = new ethers.Wallet(backendPrivateKey)

  const creditLimit = ethers.parseEther('500')
  const supplyAmount = ethers.parseEther('1000')
  const borrowAmount = ethers.parseEther('300')

  before(async function () {
    ;[owner, addr1, addr2, addr3] = await ethers.getSigners()

    // Deploy Mock ERC20 token
    const USDCFactory = (await ethers.getContractFactory('USDC')) as USDC__factory
    erc20 = await USDCFactory.deploy(owner.address)
    await erc20.waitForDeployment()

    // Transfer tokens to addr1 and addr2
    await erc20.transfer(addr1.address, initialSupply)
    await erc20.transfer(addr2.address, initialSupply)


    // Deploy VerifySig contract
    const VerifySigFactory = (await ethers.getContractFactory('VerifySig')) as VerifySig__factory
    verifySig = await VerifySigFactory.deploy()
    await verifySig.waitForDeployment()

    // Deploy LendingProtocol contract
    const LendingProtocolFactory = (await ethers.getContractFactory('LendingProtocol', {
      libraries: {
        VerifySig: await verifySig.getAddress(),
      },
    })) as LendingProtocol__factory
    lendingProtocol = await LendingProtocolFactory.deploy(
      owner.address,
      backendSigner.address,
      await erc20.getAddress(),
    )
    await lendingProtocol.waitForDeployment()
  })

  it('Should allow supplying tokens', async function () {
    // addr1 supplies tokens to the protocol
    await erc20.connect(addr1).approve(await lendingProtocol.getAddress(), supplyAmount)
    await expect(lendingProtocol.connect(addr1).supply(supplyAmount))
      .to.emit(lendingProtocol, 'Supplied')
      .withArgs(addr1.address, supplyAmount)

    const totalSupplied = await lendingProtocol.totalSupplied(addr1.address)
    expect(totalSupplied).to.equal(supplyAmount)
  })

  it('Should reject borrowing if insufficient liquidity', async function () {
    // Encode the message
    const abi = new AbiCoder();
    const packedMessage = abi.encode(["address", "uint256"], [addr2.address, creditLimit]);
    const messageHash = keccak256(packedMessage);
    const ethMessageHash = keccak256(
      abi.encode(["string", "bytes32"], ["\x19Ethereum Signed Message:\n32", messageHash]),
    );
    const signature = await backendSigner.signMessage(toBeArray(ethMessageHash));
  
    // addr2 tries to borrow more than available liquidity
    const excessiveBorrowAmount = parseUnits("2000", 18); // More than the available liquidity
    await expect(
      lendingProtocol.connect(addr2).borrow(excessiveBorrowAmount, creditLimit, signature),
    ).to.be.revertedWith('Insufficient liquidity in the pool');
  });
  
  it.only('Should allow borrowing within credit limit and liquidity constraints', async function () {
    // Ensure the protocol has enough liquidity
    await erc20.connect(addr1).approve(await lendingProtocol.getAddress(), supplyAmount);
    await lendingProtocol.connect(addr1).supply(supplyAmount);
  
    // Encode the message
    const abi = new AbiCoder();
    const packedMessage = abi.encode(["address", "uint256"], [addr2.address, creditLimit]);
  
    // Sign the raw message (let signMessage handle hashing)
    const signature = await backendSigner.signMessage(ethers.toBeArray(packedMessage));
  
    // addr2 borrows funds
    await expect(lendingProtocol.connect(addr2).borrow(borrowAmount, creditLimit, signature))
      .to.emit(lendingProtocol, 'Borrowed')
      .withArgs(addr2.address, borrowAmount);
  
    const totalBorrowed = await lendingProtocol.totalBorrowed(addr2.address);
    expect(totalBorrowed).to.equal(borrowAmount);
  });
  
  
  it('Should reject borrowing beyond credit limit', async function () {
    // Encode the message
    const abi = new AbiCoder();
    const packedMessage = abi.encode(["address", "uint256"], [addr2.address, creditLimit]);
    const messageHash = keccak256(packedMessage);
    const ethMessageHash = keccak256(
      abi.encode(["string", "bytes32"], ["\x19Ethereum Signed Message:\n32", messageHash]),
    );
    const signature = await backendSigner.signMessage(toBeArray(ethMessageHash));
  
    // addr2 tries to borrow more than their credit limit
    const excessiveBorrowAmount = parseUnits("600", 18); // Exceeds the credit limit
    await expect(
      lendingProtocol.connect(addr2).borrow(excessiveBorrowAmount, creditLimit, signature),
    ).to.be.revertedWith('Borrowing exceeds credit limit');
  });
  

  it('Should allow repayment of borrowed amount', async function () {
    await erc20.connect(addr2).approve(await lendingProtocol.getAddress(), borrowAmount)

    await expect(lendingProtocol.connect(addr2).repay(borrowAmount))
      .to.emit(lendingProtocol, 'Repaid')
      .withArgs(addr2.address, borrowAmount)

    const totalBorrowed = await lendingProtocol.totalBorrowed(addr2.address)
    expect(totalBorrowed).to.equal(0)
  })

  it('Should allow withdrawing supplied tokens', async function () {
    const withdrawAmount = ethers.parseEther('500')

    // addr1 withdraws part of their supplied tokens
    await expect(lendingProtocol.connect(addr1).withdraw(withdrawAmount))
      .to.emit(lendingProtocol, 'Withdrawn')
      .withArgs(addr1.address, withdrawAmount)

    const totalSupplied = await lendingProtocol.totalSupplied(addr1.address)
    expect(totalSupplied).to.equal(supplyAmount - withdrawAmount)
  })

  it('Should reject withdrawing more than supplied tokens', async function () {
    const excessiveWithdrawAmount = ethers.parseEther('2000')

    await expect(lendingProtocol.connect(addr1).withdraw(excessiveWithdrawAmount)).to.be.revertedWith(
      'Insufficient supplied amount',
    )
  })
})
