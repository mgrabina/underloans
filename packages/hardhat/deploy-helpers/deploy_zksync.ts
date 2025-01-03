import { Wallet, Provider, ContractFactory } from 'zksync-ethers'
import { Deployer } from '@matterlabs/hardhat-zksync-deploy'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

console.log('Initializing ...')

const deployAndVerify = async function (hre: HardhatRuntimeEnvironment) {
  console.log('Starting deployment to zkSync...')

  // Access the network configuration and cast to any to avoid TypeScript errors
  const networkConfig = hre.network.config as any

  // Initialize the zkSync provider and wallet
  const provider = new Provider(networkConfig.url)
  const accounts = networkConfig.accounts as string[]
  const wallet = new Wallet(accounts[0], provider)

  // Create deployer object
  const deployer = new Deployer(hre, wallet)

  // Path to the JSON file to store deployed addresses
  const addressesFilePath = path.resolve(__dirname, '../deployments/addresses.json')

  // Load existing addresses
  let addresses: any = {}
  try {
    addresses = JSON.parse(readFileSync(addressesFilePath, 'utf-8'))
  } catch (error) {
    console.log('No existing addresses file found, creating a new one.')
  }

  // Ensure there's an entry for the current network
  if (!addresses[hre.network.name]) {
    addresses[hre.network.name] = {}
  }

  // Deploy and verify the contracts
  async function deployAndVerifyContract(name: string, args: any[] = []) {
    const artifact = await deployer.loadArtifact(name)
    const factory = new ContractFactory(artifact.abi, artifact.bytecode, wallet)
    const contract = await factory.deploy(...args)

    console.log(`${name} deployed at ${await contract.getAddress()}`)
    addresses[hre.network.name][name] = await contract.getAddress()

    return contract
  }

  // Deploy all contracts
  const verifier = await deployAndVerifyContract('Verifier')
  const hasher = await deployAndVerifyContract('Hasher')
  const earlyAccessCodes = await deployAndVerifyContract('EarlyAccessCodes', [
    await verifier.getAddress(),
    await hasher.getAddress(),
    20,
  ])
  const earlyAccessCodesTestContract = await deployAndVerifyContract('EarlyAccessCodesTestContract', [
    await earlyAccessCodes.getAddress(),
  ])
  const numberContract = await deployAndVerifyContract('NumberContract', [
    await earlyAccessCodes.getAddress(),
  ])

  const BCN = await deployAndVerifyContract('BCN', [deployer.zkWallet.address])

  const WorldChampionNFT = await deployAndVerifyContract('WorldChampionNFT', [deployer.zkWallet.address])

  const giftCardsContract = await deployAndVerifyContract('GiftCards', [
    await verifier.getAddress(),
    await hasher.getAddress(),
    20,
    await BCN.getAddress(),
  ])

  const WorldChampionNFTAirdropperContract = await deployAndVerifyContract('WorldChampionNFTAirdropper', [
    await verifier.getAddress(),
    await hasher.getAddress(),
    20,
    await BCN.getAddress(),
  ])

  const testValidatorModule = await deployAndVerifyContract('TestValidatorModule')
  const worldcoinValidatorModule = await deployAndVerifyContract('WorldcoinValidatorModule')

  // Save deployed addresses to JSON file
  writeFileSync(addressesFilePath, JSON.stringify(addresses, null, 2))

  console.log('All contracts deployed and verified successfully!')
}
process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception:', err)
})

process.on('unhandledRejection', function (reason, promise) {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

deployAndVerify(require('hardhat')).catch((error) => {
  console.error('Deployment failed:', error)
  process.exit(1)
})
export default deployAndVerify
