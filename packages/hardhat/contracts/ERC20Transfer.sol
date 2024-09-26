// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./TalariaProtocol.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC20Transfer is TalariaProtocol {
  IERC20 public token;

  mapping(bytes32 => uint256) public TransferValues;

   constructor(
    IVerifier _verifier,
    IHasher _hasher,
    uint32 _merkleTreeHeight,
    IERC20 _token
  ) TalariaProtocol(_verifier, _hasher, _merkleTreeHeight) {
    token = _token;
  }

  function createTransfer(bytes32 _commitment, uint256 _value, address[] calldata _validationModules) public payable {
    super.setCode(_commitment, _validationModules);

    token.transferFrom(msg.sender, address(this), _value);

    TransferValues[_commitment] = _value;
  }

  function consumeTransfer(
    bytes32 _commitment,
    bytes calldata _proof,
    bytes32 _root,
    bytes32 _nullifierHash,
    address payable _to,
    bytes[] calldata _validationsArgs
  ) public {
    super.consumeCode(_commitment, _proof, _root, _nullifierHash, _to, _validationsArgs );

    uint256 value = TransferValues[_commitment];

    token.transfer(_to, value);
  }

 
}