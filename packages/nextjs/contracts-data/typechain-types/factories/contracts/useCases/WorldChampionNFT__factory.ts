/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  WorldChampionNFT,
  WorldChampionNFTInterface,
} from "../../../contracts/useCases/WorldChampionNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200170f3803806200170f83398101604081905262000034916200012e565b806040518060400160405280600d81526020016c2bb7b9363221b430b6b834b7b760991b8152506040518060400160405280600381526020016257444360e81b815250816000908162000088919062000205565b50600162000097828262000205565b5050506001600160a01b038116620000c957604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000d481620000dc565b5050620002d1565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200014157600080fd5b81516001600160a01b03811681146200015957600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200018b57607f821691505b602082108103620001ac57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200020057600081815260208120601f850160051c81016020861015620001db5750805b601f850160051c820191505b81811015620001fc57828155600101620001e7565b5050505b505050565b81516001600160401b0381111562000221576200022162000160565b620002398162000232845462000176565b84620001b2565b602080601f831160018114620002715760008415620002585750858301515b600019600386901b1c1916600185901b178555620001fc565b600085815260208120601f198616915b82811015620002a25788860151825594840194600190910190840162000281565b5085821015620002c15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61142e80620002e16000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde14610239578063c87b56dd1461024c578063cd279c7c1461025f578063e985e9c514610272578063f2fde38b1461028557600080fd5b8063715018a6146102055780638da5cb5b1461020d57806395d89b411461021e578063a22cb4651461022657600080fd5b806323b872dd116100e957806323b872dd1461019857806342842e0e146101ab57806342966c68146101be5780636352211e146101d157806370a08231146101e457600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e610129366004610f0f565b610298565b60405190151581526020015b60405180910390f35b61014b6102a9565b60405161013a9190610f7c565b61016b610166366004610f8f565b61033b565b6040516001600160a01b03909116815260200161013a565b610196610191366004610fc4565b610364565b005b6101966101a6366004610fee565b610373565b6101966101b9366004610fee565b610403565b6101966101cc366004610f8f565b610423565b61016b6101df366004610f8f565b61042f565b6101f76101f236600461102a565b61043a565b60405190815260200161013a565b610196610482565b6007546001600160a01b031661016b565b61014b610496565b610196610234366004611045565b6104a5565b61019661024736600461110d565b6104b0565b61014b61025a366004610f8f565b6104c7565b61019661026d366004611189565b6104d2565b61012e6102803660046111f4565b6104ee565b61019661029336600461102a565b61051c565b60006102a38261055a565b92915050565b6060600080546102b890611227565b80601f01602080910402602001604051908101604052809291908181526020018280546102e490611227565b80156103315780601f1061030657610100808354040283529160200191610331565b820191906000526020600020905b81548152906001019060200180831161031457829003601f168201915b5050505050905090565b60006103468261057f565b506000828152600460205260409020546001600160a01b03166102a3565b61036f8282336105b8565b5050565b6001600160a01b0382166103a257604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006103af8383336105c5565b9050836001600160a01b0316816001600160a01b0316146103fd576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610399565b50505050565b61041e838383604051806020016040528060008152506104b0565b505050565b61036f600082336105c5565b60006102a38261057f565b60006001600160a01b038216610466576040516322718ad960e21b815260006004820152602401610399565b506001600160a01b031660009081526003602052604090205490565b61048a6106be565b61049460006106eb565b565b6060600180546102b890611227565b61036f33838361073d565b6104bb848484610373565b6103fd848484846107dc565b60606102a382610905565b6104da6106be565b6104e48383610a16565b61041e8282610a30565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6105246106be565b6001600160a01b03811661054e57604051631e4fbdf760e01b815260006004820152602401610399565b610557816106eb565b50565b60006001600160e01b03198216632483248360e11b14806102a357506102a382610a80565b6000818152600260205260408120546001600160a01b0316806102a357604051637e27328960e01b815260048101849052602401610399565b61041e8383836001610ad0565b6000828152600260205260408120546001600160a01b03908116908316156105f2576105f2818486610bd6565b6001600160a01b038116156106305761060f600085600080610ad0565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b0385161561065f576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6007546001600160a01b031633146104945760405163118cdaa760e01b8152336004820152602401610399565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03821661076f57604051630b61174360e31b81526001600160a01b0383166004820152602401610399565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156103fd57604051630a85bd0160e11b81526001600160a01b0384169063150b7a029061081e903390889087908790600401611261565b6020604051808303816000875af1925050508015610859575060408051601f3d908101601f191682019092526108569181019061129e565b60015b6108c2573d808015610887576040519150601f19603f3d011682016040523d82523d6000602084013e61088c565b606091505b5080516000036108ba57604051633250574960e11b81526001600160a01b0385166004820152602401610399565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b146108fe57604051633250574960e11b81526001600160a01b0385166004820152602401610399565b5050505050565b60606109108261057f565b506000828152600660205260408120805461092a90611227565b80601f016020809104026020016040519081016040528092919081815260200182805461095690611227565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b5050505050905060006109c160408051602081019091526000815290565b905080516000036109d3575092915050565b815115610a055780826040516020016109ed9291906112bb565b60405160208183030381529060405292505050919050565b610a0e84610c3a565b949350505050565b61036f828260405180602001604052806000815250610caf565b6000828152600660205260409020610a488282611338565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b60006001600160e01b031982166380ac58cd60e01b1480610ab157506001600160e01b03198216635b5e139f60e01b145b806102a357506301ffc9a760e01b6001600160e01b03198316146102a3565b8080610ae457506001600160a01b03821615155b15610ba6576000610af48461057f565b90506001600160a01b03831615801590610b205750826001600160a01b0316816001600160a01b031614155b8015610b335750610b3181846104ee565b155b15610b5c5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610399565b8115610ba45783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610be1838383610cc6565b61041e576001600160a01b038316610c0f57604051637e27328960e01b815260048101829052602401610399565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610399565b6060610c458261057f565b506000610c5d60408051602081019091526000815290565b90506000815111610c7d5760405180602001604052806000815250610ca8565b80610c8784610d29565b604051602001610c989291906112bb565b6040516020818303038152906040525b9392505050565b610cb98383610dbc565b61041e60008484846107dc565b60006001600160a01b03831615801590610a0e5750826001600160a01b0316846001600160a01b03161480610d005750610d0084846104ee565b80610a0e5750506000908152600460205260409020546001600160a01b03908116911614919050565b60606000610d3683610e21565b600101905060008167ffffffffffffffff811115610d5657610d56611081565b6040519080825280601f01601f191660200182016040528015610d80576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610d8a57509392505050565b6001600160a01b038216610de657604051633250574960e11b815260006004820152602401610399565b6000610df4838360006105c5565b90506001600160a01b0381161561041e576040516339e3563760e11b815260006004820152602401610399565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610e605772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610e8c576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610eaa57662386f26fc10000830492506010015b6305f5e1008310610ec2576305f5e100830492506008015b6127108310610ed657612710830492506004015b60648310610ee8576064830492506002015b600a83106102a35760010192915050565b6001600160e01b03198116811461055757600080fd5b600060208284031215610f2157600080fd5b8135610ca881610ef9565b60005b83811015610f47578181015183820152602001610f2f565b50506000910152565b60008151808452610f68816020860160208601610f2c565b601f01601f19169290920160200192915050565b602081526000610ca86020830184610f50565b600060208284031215610fa157600080fd5b5035919050565b80356001600160a01b0381168114610fbf57600080fd5b919050565b60008060408385031215610fd757600080fd5b610fe083610fa8565b946020939093013593505050565b60008060006060848603121561100357600080fd5b61100c84610fa8565b925061101a60208501610fa8565b9150604084013590509250925092565b60006020828403121561103c57600080fd5b610ca882610fa8565b6000806040838503121561105857600080fd5b61106183610fa8565b91506020830135801515811461107657600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156110b2576110b2611081565b604051601f8501601f19908116603f011681019082821181831017156110da576110da611081565b816040528093508581528686860111156110f357600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561112357600080fd5b61112c85610fa8565b935061113a60208601610fa8565b925060408501359150606085013567ffffffffffffffff81111561115d57600080fd5b8501601f8101871361116e57600080fd5b61117d87823560208401611097565b91505092959194509250565b60008060006060848603121561119e57600080fd5b6111a784610fa8565b925060208401359150604084013567ffffffffffffffff8111156111ca57600080fd5b8401601f810186136111db57600080fd5b6111ea86823560208401611097565b9150509250925092565b6000806040838503121561120757600080fd5b61121083610fa8565b915061121e60208401610fa8565b90509250929050565b600181811c9082168061123b57607f821691505b60208210810361125b57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061129490830184610f50565b9695505050505050565b6000602082840312156112b057600080fd5b8151610ca881610ef9565b600083516112cd818460208801610f2c565b8351908301906112e1818360208801610f2c565b01949350505050565b601f82111561041e57600081815260208120601f850160051c810160208610156113115750805b601f850160051c820191505b818110156113305782815560010161131d565b505050505050565b815167ffffffffffffffff81111561135257611352611081565b611366816113608454611227565b846112ea565b602080601f83116001811461139b57600084156113835750858301515b600019600386901b1c1916600185901b178555611330565b600085815260208120601f198616915b828110156113ca578886015182559484019460019091019084016113ab565b50858210156113e85787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122088dc31418f053eb7a3d044b3e8fc6501665dd2052374716641a67ada7aca52c264736f6c63430008140033";

type WorldChampionNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WorldChampionNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WorldChampionNFT__factory extends ContractFactory {
  constructor(...args: WorldChampionNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      WorldChampionNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WorldChampionNFT__factory {
    return super.connect(runner) as WorldChampionNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WorldChampionNFTInterface {
    return new Interface(_abi) as WorldChampionNFTInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WorldChampionNFT {
    return new Contract(address, _abi, runner) as unknown as WorldChampionNFT;
  }
}