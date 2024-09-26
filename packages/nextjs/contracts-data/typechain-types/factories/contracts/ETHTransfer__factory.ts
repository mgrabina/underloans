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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ETHTransfer,
  ETHTransferInterface,
} from "../../contracts/ETHTransfer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVerifier",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_merkleTreeHeight",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nullifierHash",
        type: "bytes32",
      },
    ],
    name: "ConsumeCode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "leafIndex",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "NewCode",
    type: "event",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
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
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "_validationsArgs",
        type: "bytes[]",
      },
    ],
    name: "consumeCode",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "_validationsArgs",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "transfer",
        type: "bool",
      },
    ],
    name: "consumeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "_validationModules",
        type: "address[]",
      },
    ],
    name: "createTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
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
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
    ],
    name: "isSpent",
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
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_nullifierHashes",
        type: "bytes32[]",
      },
    ],
    name: "isSpentArray",
    outputs: [
      {
        internalType: "bool[]",
        name: "spent",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifierHashes",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "_validationModules",
        type: "address[]",
      },
    ],
    name: "setCode",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "transferValues",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validationModules",
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
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
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
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0346200021457601f6200258738819003918201601f191683019291906001600160401b0384118385101762000219578160609284926040968752833981010312620002145780516001600160a01b039081811681036200021457602092838101519283168303620002145784015163ffffffff938482168092036200021457600380546001600160401b03191690558115620001c5578082101562000182576000938263ffffffff19865416178555608052835b8581168381101562000100579081620000cf88936200022f565b908752600184528887205516858114620000ec57600101620000b5565b634e487b7160e01b85526011600452602485fd5b505092919390600019018181116200016e5762000123869392600292166200022f565b93828052522055600160045560a05251611d5990816200082e8239608051818181610196015281816102de0152610fdb015260a0518181816108f701528181610d390152610f4f0152f35b634e487b7160e01b83526011600452602483fd5b60649086519062461bcd60e51b82526004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e20333200006044820152fd5b60849086519062461bcd60e51b82526004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b6064820152fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b806200025a57507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c90565b600181036200028857507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d90565b60028103620002b657507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c20090565b60038103620002e457507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb90565b600481036200031257507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c990565b600581036200034057507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb5495990565b600681036200036e57507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c90565b600781036200039c57507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb490565b60088103620003ca57507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff8090565b60098103620003f757507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c00790565b600a81036200042557507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e3090565b600b81036200045357507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e590565b600c81036200048157507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f90565b600d8103620004af57507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd90565b600e8103620004dd57507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb10890565b600f81036200050b57507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b690565b601081036200053957507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db6185490565b601181036200056757507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea90565b601281036200059557507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d90565b60138103620005c357507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc0590565b60148103620005f157507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d490565b601581036200061f57507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b296790565b601681036200064d57507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc345390565b601781036200067b57507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c4890565b60188103620006a957507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd190565b60198103620006d757507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c90565b601a81036200070557507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce9990565b601b81036200073357507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f35490565b601c81036200076057507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d90565b601d81036200078e57507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f42790565b601e8103620007bc57507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb90565b601f03620007e8577f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc90565b60405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606490fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826317cc915c146111d9575081631919654414610f7e5781632b7ac3f314610f3a5781633e7fd3b414610c3f578163414a37ba14610c045781634ecf518b14610be157816368f1954c146107ec5781636d9833e3146107cc57816378c62b66146107a4578163838a11fd14610756578163839df945146107295781638ea3099e146106f057816390eeb02b146106cb5781639fa12d0b146105c9578163ba70f7571461059b578163c2b40ae414610573578163cc013d851461027e578163cd87a3b414610262578163e5285dcc1461022a578163e829558814610200578163ec732959146101c5578163ed33639f14610181578163f178e47c14610155575063fc7e9c6f1461012d57600080fd5b346101515781600319360112610151576003549051602091821c63ffffffff168152f35b5080fd5b90503461017d57602036600319011261017d5760209282913581526001845220549051908152f35b8280fd5b505034610151578160031936011261015157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b505034610151578160031936011261015157602090517f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c8152f35b82843461022757602036600319011261022757506102206020923561174f565b9051908152f35b80fd5b828434610227576020366003190112610227575061025960209235600052600560205260ff6040600020541690565b90519015158152f35b50503461015157816003193601126101515760209051601e8152f35b83915061028a3661123d565b61029592919261143a565b8185526020906006825260ff87872054166105265763ffffffff966003888154851c1694896102c6818b5416611678565b1686146104ca5790919294889495819783988c889a817f00000000000000000000000000000000000000000000000000000000000000009a5b5416918c169182101561039257889796959493928f928f9a908d637fffffff9461034a9360019e8f8088161560001461038357839461033d8761174f565b9683525220555b8d6114df565b991c169a168d81146103705760010199959694959394929391929091908d90818e6102ff565b634e487b7160e01b8d5260118c5260248dfd5b91939092948352522054610344565b9498505050929750929899959395895490601e816103b181851661169e565b160616809163ffffffff1916178a558a5260028452858a20556103d38461169e565b885467ffffffff00000000191690841b67ffffffff000000001617885585895260068352848920805460ff1916600190811790915597895b8381106104485750508451938452505042908201527fee825d3f4d0fa209d8e2a39afe24a21286d8dc103d63061a2ed322db4ce018e39190a25580f35b878b5260078552868b2061045d82868661142a565b6001600160a01b0391903582811691908290036104c657805490600160401b8210156104b35781610498918f6104ae979695940181556113d7565b9092835491871b92831b921b1916179055611405565b61040b565b634e487b7160e01b8f5260418d5260248ffd5b8d80fd5b825162461bcd60e51b8152808901869052603060248201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160448201526f1d995cc818d85b88189948185919195960821b6064820152608490fd5b865162461bcd60e51b8152808601839052602160248201527f54686520636f6d6d69746d656e7420686173206265656e207375626d697474656044820152601960fa1b6064820152608490fd5b90503461017d57602036600319011261017d5760209282913581526002845220549051908152f35b5050346101515781600319360112610151578060209263ffffffff6003541681526002845220549051908152f35b90508234610227576020918260031936011261015157803567ffffffffffffffff811161017d578492916105ff91369101611207565b919061060a8361133e565b90610617855192836112a3565b8382526106238461133e565b8287019490601f1901368637835b8181106106785750505083519485948186019282875251809352850193925b82811061065f57505050500390f35b8351151585528695509381019392810192600101610650565b806106a56106906106ae9385879c99989a9b9c61142a565b35600052600560205260ff6040600020541690565b6106b957611405565b969594929396610631565b60016106c582896114b5565b52611405565b50503461015157816003193601126101515760209063ffffffff600354169051908152f35b90503461017d57606036600319011261017d5735916001600160a01b0383168303610227575061022060209260443590602435906114df565b90503461017d57602036600319011261017d578160209360ff923581526006855220541690519015158152f35b828434610227578160031936011261022757602435923581526007602052818120908154841015610227575060209261078e916113d7565b905491519160018060a01b039160031b1c168152f35b90503461017d57602036600319011261017d5760209282913581526008845220549051908152f35b8284346102275760203660031901126102275750610259602092356116b3565b9190503461017d5760e036600319011261017d5781359167ffffffffffffffff9160248035848111610bdd5761082590369085016112e1565b93604435606435610834611328565b9260a435908111610bd95761084c9036908801611356565b9160c4358015158103610bd55761086161143a565b828b5260209860058a5260ff888d205416610b935761087f836116b3565b15610b515789898d8a956108de60e09588519261089b84611271565b8352898684015260018060a01b03809c1680998401528360608401528360808401528360a08401528d5196879563695ef6f9821b875286015260e4850190611475565b9082848d015b60068210610b315750505082809103918a7f0000000000000000000000000000000000000000000000000000000000000000165af1908115610b27578c91610b0a575b5015610acf57908a94939291855b8b875260078b5288872080548210156109e8578b8983828b8f8f968d9161098c61096d8f9388610964916113d7565b989054946114b5565b519951998a988997889463c16e50ef60e01b8652850152830190611475565b039460031b1c165af180156109de57906109ac92916109b1575b50611405565b610935565b6109d0908d803d106109d7575b6109c881836112a3565b81019061145d565b50386109a6565b503d6109be565b8a513d8a823e3d90fd5b5050935093949796989150857f9ebe94a87e9d85fb44a2b38b11c3b10117eba3fbd045c54a8577bc62540d5d759180875260058952818720600160ff1982541617905581519086825289820152a160018855835260088552838320908382549255610a51578280f35b8280929181925af13d15610aca573d610a69816112c5565b90610a76845192836112a3565b815286843d92013e5b15610a8b578481808280f35b5162461bcd60e51b815292830152601e908201527f7061796d656e7420746f205f746f20646964206e6f7420676f207468727500006044820152606490fd5b610a7f565b865162461bcd60e51b81528089018a90526016818801527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b6044820152606490fd5b610b2191508a3d8c116109d7576109c881836112a3565b38610927565b88513d8e823e3d90fd5b8287939650600194979295505181520193019101928f918e9486946108e4565b875162461bcd60e51b8152808a018b9052601c818901527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f74000000006044820152606490fd5b875162461bcd60e51b8152808a018b9052601f818901527f546865206e6f746520686173206265656e20616c7265616479207370656e74006044820152606490fd5b8a80fd5b8980fd5b8680fd5b50503461015157816003193601126101515763ffffffff60209254169051908152f35b505034610151578160031936011261015157602090517f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018152f35b91905060c036600319011261017d5781359167ffffffffffffffff9160248035848111610bdd57610c7390369085016112e1565b93604435606435610c82611328565b9260a435908111610bd957610c9a9036908801611356565b91610ca361143a565b818a526020976005895260ff878c205416610ef857610cc1826116b3565b15610eb6579088888c60e0938a5190610cd982611271565b81528684820152610d2060018060a01b03809a1696878d8401528360608401528360808401528360a08401528c5196879563695ef6f9821b875286015260e4850190611475565b9082848c015b60068210610e96575050508280910391897f0000000000000000000000000000000000000000000000000000000000000000165af1908115610e8c578b91610e6f575b5015610e34579089939291845b8a865260078a528786208054821015610de9578a8883828a8a8f8f9790610da561096d6109648f9489906113d7565b039460031b1c165af18015610ddf5790610dc49291610dc95750611405565b610d76565b6109d0908c8d3d106109d7576109c881836112a3565b89513d89823e3d90fd5b8660018b7f9ebe94a87e9d85fb44a2b38b11c3b10117eba3fbd045c54a8577bc62540d5d758c8f898991818852600581528388208760ff198254161790558351928352820152a15580f35b855162461bcd60e51b81528088018990526016818701527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b6044820152606490fd5b610e869150893d8b116109d7576109c881836112a3565b38610d69565b87513d8d823e3d90fd5b8287939650600194979295505181520193019101928e918d948694610d26565b865162461bcd60e51b81528089018a9052601c818801527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f74000000006044820152606490fd5b865162461bcd60e51b81528089018a9052601f818801527f546865206e6f746520686173206265656e20616c7265616479207370656e74006044820152606490fd5b505034610151578160031936011261015157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b839150610f8a3661123d565b610f9592919261143a565b8185526020906006825260ff87872054166105265763ffffffff96600393888554851c169489610fc7818b5416611678565b1686146104ca5785999897969599829489977f0000000000000000000000000000000000000000000000000000000000000000965b8c8c5416908d8b1691821015611058578d9e61103c8e9f938c9e9f9b9c9d9e637fffffff948c60019e8f8088161560001461038357839461033d8761174f565b991c169a168d811461037057999c9b9a99600101989796610ffc565b8c9a5087999850869792908c979492508e875490601e8161107a81851661169e565b160616809163ffffffff19161788558c5260028a52838c205561109c8561169e565b865467ffffffff000000001916908a1b67ffffffff0000000016178655838b5260068952828b20805460ff19166001908117909155958b5b83811061116757505050507fee825d3f4d0fa209d8e2a39afe24a21286d8dc103d63061a2ed322db4ce018e3919281519081524288820152a2815534156111245750835260089052812034905580f35b835162461bcd60e51b8152908101839052601e60248201527f76616c75652073686f756c642062652067726561746572207468616e203000006044820152606490fd5b91935091938b5260078952898b2061118082868661142a565b6001600160a01b0391903582811691908290036104c657805490600160401b8210156111c65781610498918b6111bb979695940181556113d7565b918793918a936110d4565b634e487b7160e01b8f5260418b5260248ffd5b92915034611203576020366003190112611203573583526005602090815292205460ff1615158152f35b8380fd5b9181601f840112156112385782359167ffffffffffffffff8311611238576020808501948460051b01011161123857565b600080fd5b90604060031983011261123857600435916024359067ffffffffffffffff82116112385761126d91600401611207565b9091565b60c0810190811067ffffffffffffffff82111761128d57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761128d57604052565b67ffffffffffffffff811161128d57601f01601f191660200190565b81601f82011215611238578035906112f8826112c5565b9261130660405194856112a3565b8284526020838301011161123857816000926020809301838601378301015290565b608435906001600160a01b038216820361123857565b67ffffffffffffffff811161128d5760051b60200190565b9080601f830112156112385781359061136e8261133e565b9261137c60405194856112a3565b828452602092838086019160051b8301019280841161123857848301915b8483106113aa5750505050505090565b823567ffffffffffffffff81116112385786916113cc848480948901016112e1565b81520192019161139a565b80548210156113ef5760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b60001981146114145760010190565b634e487b7160e01b600052601160045260246000fd5b91908110156113ef5760051b0190565b60026004541461144b576002600455565b604051633ee5aeb560e01b8152600490fd5b90816020910312611238575180151581036112385790565b919082519283825260005b8481106114a1575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201611480565b80518210156113ef5760209160051b010190565b9190826040910312611238576020825192015190565b92917f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001938483101561163457848210156115e55760018060a01b031693604090815163f47d33b560e01b94858252600482015260009485602483015283826044818b5afa9788156115db578697988596979389916115b9575b506044939486519889968795865208600484015260248301525afa9283156115ae579261158457505090565b6115a39250803d106115a7575b61159b81836112a3565b8101906114c9565b5090565b503d611591565b9051903d90823e3d90fd5b604494506115d49150863d88116115a75761159b81836112a3565b9093611558565b84513d88823e3d90fd5b60405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c646044820152fd5b80156116985760ff8111611414576001901b9063ffffffff821161141457565b50600190565b90600163ffffffff8093160191821161141457565b80156117495763ffffffff8060035416918260019384805b6116db575b505050505050600090565b1561173a575b6000908481169081835260026020526040832054851461173157859115611729575b168015611715576000190190856116cb565b634e487b7160e01b82526011600452602482fd5b50601e611703565b50505050505090565b81848216036116e157806116d0565b50600090565b8061177957507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c90565b600181036117a657507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d90565b600281036117d357507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c20090565b6003810361180057507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb90565b6004810361182d57507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c990565b6005810361185a57507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb5495990565b6006810361188757507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c90565b600781036118b457507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb490565b600881036118e157507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff8090565b6009810361190d57507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c00790565b600a810361193a57507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e3090565b600b810361196757507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e590565b600c810361199457507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f90565b600d81036119c157507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd90565b600e81036119ee57507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb10890565b600f8103611a1b57507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b690565b60108103611a4857507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db6185490565b60118103611a7557507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea90565b60128103611aa257507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d90565b60138103611acf57507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc0590565b60148103611afc57507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d490565b60158103611b2957507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b296790565b60168103611b5657507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc345390565b60178103611b8357507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c4890565b60188103611bb057507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd190565b60198103611bdd57507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c90565b601a8103611c0a57507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce9990565b601b8103611c3757507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f35490565b601c8103611c6357507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d90565b601d8103611c9057507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f42790565b601e8103611cbd57507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb90565b601f03611ce8577f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc90565b60405162461bcd60e51b8152602060048201526013602482015272496e646578206f7574206f6620626f756e647360681b6044820152606490fdfea2646970667358221220956eb5b567654c839763f972f71797b5bbc65f17de844279f2cf7db0b0bcbefe64736f6c63430008140033";

type ETHTransferConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ETHTransferConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ETHTransfer__factory extends ContractFactory {
  constructor(...args: ETHTransferConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _verifier: AddressLike,
    _hasher: AddressLike,
    _merkleTreeHeight: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _verifier,
      _hasher,
      _merkleTreeHeight,
      overrides || {}
    );
  }
  override deploy(
    _verifier: AddressLike,
    _hasher: AddressLike,
    _merkleTreeHeight: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _verifier,
      _hasher,
      _merkleTreeHeight,
      overrides || {}
    ) as Promise<
      ETHTransfer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ETHTransfer__factory {
    return super.connect(runner) as ETHTransfer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETHTransferInterface {
    return new Interface(_abi) as ETHTransferInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ETHTransfer {
    return new Contract(address, _abi, runner) as unknown as ETHTransfer;
  }
}
