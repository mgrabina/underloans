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
} from "../../../contracts/examples/WorldChampionNFT";

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
  "0x608034620003b857601f906001600160401b0390601f199062001672388190038581018416830185811184821017620003a257839282916040528339602092839181010312620003b857516001600160a01b03948582169491859003620003b8576200006a620003bd565b92600d84526c2bb7b9363221b430b6b834b7b760991b818501526200008e620003bd565b90600382526257444360e81b81830152845195848711620003a2576000968754966001978881811c9116801562000397575b85821014620003835790818784931162000330575b508490878311600114620002cf578a92620002c3575b5050600019600383901b1c191690871b1787555b8251948511620002af5785548681811c91168015620002a4575b83821014620002905790818587969594931162000237575b5081938511600114620001d25750508592620001c6575b5050600019600383901b1c191690821b1790555b8115620001ae57600780546001600160a01b0319811684179091556040519316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36112949081620003de8239f35b60249060405190631e4fbdf760e01b82526004820152fd5b01519050388062000148565b869593929193168588528388209388905b8282106200021d575050841162000203575b505050811b0190556200015c565b015160001960f88460031b161c19169055388080620001f5565b8484015186558897909501949384019390810190620001e3565b9091929394508688528288208580880160051c82019285891062000286575b9188978a9297969594930160051c01915b8281106200027757505062000131565b8a815588975089910162000267565b9250819262000256565b634e487b7160e01b88526022600452602488fd5b90607f169062000119565b634e487b7160e01b87526041600452602487fd5b015190503880620000eb565b90848a9416918b8052868c20928c5b88828210620003195750508411620002ff575b505050811b018755620000ff565b015160001960f88460031b161c19169055388080620002f1565b8385015186558d97909501949384019301620002de565b909150898052848a208780850160051c82019287861062000379575b918b91869594930160051c01915b8281106200036a575050620000d5565b8c81558594508b91016200035a565b925081926200034c565b634e487b7160e01b8a52602260045260248afd5b90607f1690620000c0565b634e487b7160e01b600052604160045260246000fd5b600080fd5b60408051919082016001600160401b03811183821017620003a25760405256fe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a714610d075750806306fdde0314610c5f578063081812fc14610c24578063095ea7b314610b4857806323b872dd14610b3057806342842e0e14610b0157806342966c68146109b05780636352211e1461097f57806370a082311461092a578063715018a6146108cd5780638da5cb5b146108a457806395d89b41146107c1578063a22cb46514610720578063b88d4fde146106b2578063c87b56dd146105bd578063cd279c7c146101cd578063e985e9c51461017b5763f2fde38b146100e957600080fd5b3461017757602036600319011261017757610102610dcd565b9061010b610eda565b6001600160a01b03918216928315610161575050600754826bffffffffffffffffffffffff60a01b821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b51631e4fbdf760e01b8152908101849052602490fd5b8280fd5b5050346101c957806003193601126101c95760ff8160209361019b610dcd565b6101a3610de8565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b5082346105ba5760603660031901126105ba576101e8610dcd565b60249367ffffffffffffffff938535926044358681116105b657366023820112156105b65761021f90369089818601359101610ea3565b90610228610eda565b835161023381610e33565b8681526001600160a01b03828116929083156105a057916002949391899a9b93898b5289848a7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60209e8f9b8c968188528483205416936003851515988961056e575b878552528220805460019081019091558683529c528d812080546001600160a01b0319168517905580a4610558573b61042c575b505085885260068752848820938251998a1161041b5750506102ec8354610f06565b601f81116103d5575b508590601f8911600114610357579780928192899a7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79a9461034c575b50501b916000199060031b1c19161790555b51908152a180f35b015192508a80610332565b838852868820909891601f198316895b8181106103c0575099837ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79a9b106103a7575b505050811b019055610344565b015160001960f88460031b161c1916905588808061039a565b8b830151845592850192918901918901610367565b838852868820601f8a0160051c810191888b10610411575b601f0160051c019083905b8281106104065750506102f5565b8981550183906103f8565b90915081906103ed565b634e487b7160e01b89526041905287fd5b94610475898b978489879f99979e869f8d9e9a989f9d5196879586948593630a85bd0160e11b9b8c865233908601528401528c6044840152608060648401526084830190610d8d565b03925af1879181610514575b506104dc575050505050503d6000146104d4573d61049e81610e87565b906104ab85519283610e65565b81528091833d92013e5b805191826104d1575050505191633250574960e11b8352820152fd5b01fd5b5060606104b5565b63ffffffff60e09c94969c9b979b9a939599989a1b16036104ff575089806102ca565b8551633250574960e11b815280860191909152fd5b9091508881813d8311610551575b61052c8183610e65565b8101031261054d57516001600160e01b03198116810361054d57908d610481565b8780fd5b503d610522565b87516339e3563760e11b81528088018c90528490fd5b600089815260046020526040902080546001600160a01b03191690558685528181528285208054600019019055610296565b8651633250574960e11b81528087018a90528b90fd5b8580fd5b80fd5b50903461017757602091826003193601126106ae57356105dc816110df565b508352600682528083209281518094829080546105f881610f06565b91828552600191888382169182600014610687575050600114610649575b50505061064593929161062a910386610e65565b815161063581610e33565b5251928284938452830190610d8d565b0390f35b8552868520879350859291905b82841061066f575050508201018161062a610645610616565b8054848b018601528995508894909301928101610656565b60ff19168782015293151560051b8601909301935084925061062a91506106459050610616565b8380fd5b8382346101c95760803660031901126101c9576106cd610dcd565b6106d5610de8565b6044359060643567ffffffffffffffff81116105b657366023820112156105b65761071d9481602461070c93369301359101610ea3565b92610718838383610f40565b61111a565b80f35b50903461017757806003193601126101775761073a610dcd565b90602435918215158093036107bd576001600160a01b03169283156107a85750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b836024925191630b61174360e31b8352820152fd5b8480fd5b5050346101c957816003193601126101c9578051908260018054916107e583610f06565b8086529282811690811561087c5750600114610820575b50505061080e82610645940383610e65565b51918291602083526020830190610d8d565b94508085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8286106108645750505061080e82602061064595820101946107fc565b80546020878701810191909152909501948101610847565b61064597508693506020925061080e94915060ff191682840152151560051b820101946107fc565b5050346101c957816003193601126101c95760075490516001600160a01b039091168152602090f35b83346105ba57806003193601126105ba576108e6610eda565b600780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5091346105ba5760203660031901126105ba576001600160a01b0361094d610dcd565b1692831561096a5750806020938392526003845220549051908152f35b91516322718ad960e21b815291820152602490fd5b5091346105ba5760203660031901126105ba575061099f602092356110df565b90516001600160a01b039091168152f35b508290346101c95760209081600319360112610177578035808452600283528484205490926001600160a01b039182169290913315159081610a6c575b505050936002849583959495610a39575b85855252822080546001600160a01b03191690557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8280a480f35b600086815260046020526040902080546001600160a01b03191690558385526003815282852080546000190190556109fe565b81610ab5575b5015610a7f5780806109ed565b935050610a9a576024925191637e27328960e01b8352820152fd5b604492519163177e802f60e01b835233908301526024820152fd5b33851491508115610ae4575b8115610acf575b5087610a72565b85875282845287872054163314905087610ac8565b8487526005845287872033885284528787205460ff169150610ac1565b5050346101c95761071d90610b1536610dfe565b91925192610b2284610e33565b858452610718838383610f40565b83346105ba5761071d610b4236610dfe565b91610f40565b509034610177578060031936011261017757610b62610dcd565b91602435610b6f816110df565b33151580610c11575b80610be8575b610bd2576001600160a01b039485169482918691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258880a48452602052822080546001600160a01b031916909117905580f35b835163a9fbf51f60e01b81523381850152602490fd5b506001600160a01b03811686526005602090815284872033885290528386205460ff1615610b7e565b506001600160a01b038116331415610b78565b503461017757602036600319011261017757918260209335610c45816110df565b50825283528190205490516001600160a01b039091168152f35b5050346101c957816003193601126101c957805190828054610c8081610f06565b8085529160019180831690811561087c5750600114610cab5750505061080e82610645940383610e65565b80809650527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828610610cef5750505061080e82602061064595820101946107fc565b80546020878701810191909152909501948101610cd2565b92505034610177576020366003190112610177573563ffffffff60e01b81168091036101775760209250632483248360e11b8114908115610d4a575b5015158152f35b6380ac58cd60e01b811491508115610d7c575b8115610d6b575b5038610d43565b6301ffc9a760e01b14905038610d64565b635b5e139f60e01b81149150610d5d565b919082519283825260005b848110610db9575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610d98565b600435906001600160a01b0382168203610de357565b600080fd5b602435906001600160a01b0382168203610de357565b6060906003190112610de3576001600160a01b03906004358281168103610de357916024359081168103610de3579060443590565b6020810190811067ffffffffffffffff821117610e4f57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610e4f57604052565b67ffffffffffffffff8111610e4f57601f01601f191660200190565b929192610eaf82610e87565b91610ebd6040519384610e65565b829481845281830111610de3578281602093846000960137010152565b6007546001600160a01b03163303610eee57565b60405163118cdaa760e01b8152336004820152602490fd5b90600182811c92168015610f36575b6020831014610f2057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f15565b6001600160a01b0391821692909183156110c657600092828452826020956002875260409684888820541696879133151580611030575b509060027fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9284610ffd575b858352600381528b8320805460010190558683525289812080546001600160a01b0319168517905580a41692838303610fdc5750505050565b6064945051926364283d7b60e01b8452600484015260248301526044820152fd5b600087815260046020526040902080546001600160a01b0319169055848352600381528b83208054600019019055610fa3565b91939450915080611085575b1561104c57859291879138610f77565b878688611069576024915190637e27328960e01b82526004820152fd5b604491519063177e802f60e01b82523360048301526024820152fd5b5033871480156110aa575b8061103c575085825260048152338589842054161461103c565b5086825260058152878220338352815260ff8883205416611090565b604051633250574960e11b815260006004820152602490fd5b6000818152600260205260409020546001600160a01b0316908115611102575090565b60249060405190637e27328960e01b82526004820152fd5b813b611127575b50505050565b604051630a85bd0160e11b8082523360048301526001600160a01b03928316602483015260448201949094526080606482015260209592909116939092908390611175906084830190610d8d565b039285816000958187895af184918161121e575b506111e9575050503d6000146111e1573d6111a381610e87565b906111b16040519283610e65565b81528091843d92013e5b805192836111dc57604051633250574960e11b815260048101849052602490fd5b019050fd5b5060606111bb565b919450915063ffffffff60e01b1603611206575038808080611121565b60249060405190633250574960e11b82526004820152fd5b9091508681813d8311611257575b6112368183610e65565b810103126107bd57516001600160e01b0319811681036107bd579038611189565b503d61122c56fea2646970667358221220617dc989688b9a14cae3b31c7d7cd6a281957836ac46fc0ce887c88a772d0f7864736f6c63430008140033";

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