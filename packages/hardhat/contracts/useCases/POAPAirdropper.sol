// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../ERC721Transfer.sol";

contract POAPAirdropper is ERC721Transfer {

// Map for consumed poaps per campaign
  mapping(bytes32 => uint256) public consumed;
// Map for limit amount of poaps per campaign
  mapping(bytes32 => uint256) public limits;

  constructor (
    IVerifier _verifier,
    IHasher _hasher,
    uint32 _merkleTreeHeight,
    IERC721 _token
  ) ERC721Transfer(_verifier, _hasher, _merkleTreeHeight, _token) {  
  }

  function createPOAPAirdrop(bytes32 _commitment, address[] calldata _validationModules, uint256 _id, uint256 limit) public payable  {
    limits[_commitment] = limit;
    
    createTransfer(
      _commitment,
      _validationModules,
      _id
    );
  }

  function consumePOAPAirdrop(
    bytes32 _commitment,
    bytes calldata _proof,
    bytes32 _root,
    bytes32 _nullifierHash,
    address payable _to,
    bytes[] calldata _validationsArgs
  ) public  {
    require(consumed[_commitment] < limits[_commitment], "POAPAirdropper: Limit reached");

    consumed[_commitment] += 1;
    consumeTransfer(
      _commitment,
      _proof,
      _root,
      _nullifierHash,
      _to,
      _validationsArgs
    );
  }

  function bulkCreatePOAPAirdrop(bytes32[] calldata _commitments, address[][] calldata _validationModules, uint256[] calldata _ids, uint256[] calldata _limits) external payable  {
    require(_commitments.length == _ids.length, "commitments and ids length mismatch");
    require(_commitments.length == _limits.length, "commitments and limits length mismatch");
    require(_commitments.length == _validationModules.length, "commitments and validationModules length mismatch");

    for (uint256 i = 0; i < _commitments.length; i++) {
      createPOAPAirdrop(_commitments[i], _validationModules[i], _ids[i], _limits[i]);
    }
  }

  function bulkConsumePOAPAirdrop(
    bytes32[] calldata _commitments,
    bytes[] calldata _proofs,
    bytes32[] calldata _roots,
    bytes32[] calldata _nullifierHashes,
    address payable[] calldata _tos,
    bytes[] calldata _validationsArgs
  ) external  {
    require(_commitments.length == _proofs.length, "commitments and proofs length mismatch");
    require(_commitments.length == _roots.length, "commitments and roots length mismatch");
    require(_commitments.length == _nullifierHashes.length, "commitments and nullifierHashes length mismatch");
    require(_commitments.length == _tos.length, "commitments and tos length mismatch");
    require(_commitments.length == _validationsArgs.length, "commitments and validationsArgs length mismatch");

    for (uint256 i = 0; i < _commitments.length; i++) {
      consumePOAPAirdrop(_commitments[i], _proofs[i], _roots[i], _nullifierHashes[i], _tos[i], _validationsArgs);
    }
  }
}