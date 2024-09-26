/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  EndpointV2ViewUpgradeable,
  EndpointV2ViewUpgradeableInterface,
} from "../../../../@layerzerolabs/lz-evm-protocol-v2/contracts/EndpointV2ViewUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "EMPTY_PAYLOAD_HASH",
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
    name: "NIL_PAYLOAD_HASH",
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
    name: "endpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpointV2",
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "executable",
    outputs: [
      {
        internalType: "enum ExecutionState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "initializable",
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
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiveLib",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_payloadHash",
        type: "bytes32",
      },
    ],
    name: "verifiable",
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
] as const;

const _bytecode =
  "0x60808060405234610016576106c3908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c9081632baf0be714610181575080634b4b2efb1461012d5780635e280f1114610106578063861e1ca5146100d7578063cb5026b9146100bd5763e1e3a7df1461006457600080fd5b346100b95760c03660031901126100b95761007e366101d5565b91610087610232565b608435916001600160a01b03831683036100b65750926100ad9160209460a435926102ff565b90519015158152f35b80fd5b5080fd5b50346100b957816003193601126100b95751908152602090f35b50346100b95760803660031901126100b9576020906100ad6100f8366101d5565b610100610232565b90610260565b50346100b957816003193601126100b957905490516001600160a01b039091168152602090f35b50346100b95760803660031901126100b95761015961014b366101d5565b610153610232565b9061044d565b905190600481101561016d57602092508152f35b634e487b7160e01b83526021600452602483fd5b8390346100b957816003193601126100b9576000198152602090f35b90601f8019910116810190811067ffffffffffffffff8211176101bf57604052565b634e487b7160e01b600052604160045260246000fd5b606090600319011261022d576040519067ffffffffffffffff60608301818111848210176101bf576040528260043563ffffffff8116810361022d5781526024356020820152604435918216820361022d5760400152565b600080fd5b606435906001600160a01b038216820361022d57565b9081602091031261022d5751801515810361022d5790565b6000546040805163861e1ca560e01b8152835163ffffffff1660048201526020808501516024830152939091015167ffffffffffffffff1660448201526001600160a01b0393841660648201529283916084918391165afa600091816102cf575b506102cc5750600090565b90565b6102f191925060203d81116102f8575b6102e9818361019d565b810190610248565b90386102c1565b503d6102df565b600080548251604051639d7f977560e01b81526001600160a01b03808716600483015263ffffffff92909216602482015295811660448701529195946020949190921692918481606481875afa908115610422578791610405575b50156103fd576040805163c9a54a9960e01b8152835163ffffffff1660048201526020840151602482015292015167ffffffffffffffff1660448301526001600160a01b03166064820152908290829060849082905afa9182156103f25784926103d5575b5050156103d157156102cc5750600190565b5090565b6103eb9250803d106102f8576102e9818361019d565b38806103bf565b6040513d86823e3d90fd5b505050505090565b61041c9150853d87116102f8576102e9818361019d565b3861035a565b6040513d89823e3d90fd5b9081602091031261022d575167ffffffffffffffff8116810361022d5790565b60018060a01b03600092818454169263ffffffff908181511692602095868301968751926040928386019767ffffffffffffffff95868a51169186519b63c9fc7bcd60e01b8d52851660048d015260248c015260448b015260648a01528289608481845afa988915610683578b99610650575b5088159889806105cc575b6105bb576000191415998a9788610511575b5050505050505050905061050957159081610501575b506104fb5790565b50600190565b9050386104f3565b505050600290565b8661055f9799508596989a511699511690519287519687948593849363283750ff60e21b85526004850163ffffffff604092959493606083019660018060a01b031683521660208201520152565b03915afa9283156105b257508792610585575b50501610158038808080808080806104dd565b6105a49250803d106105ab575b61059c818361019d565b81019061042d565b3880610572565b503d610592565b513d89823e3d90fd5b505050505050505050505050600390565b50885187518c5187516305b17bb760e41b81526001600160a01b0387166004820152918b1663ffffffff1660248301526044820152908716908581606481875afa908115610644579088918f91610627575b501610156104cb565b61063e9150873d89116105ab5761059c818361019d565b3861061e565b8e8851903d90823e3d90fd5b9098508281813d831161067c575b610668818361019d565b81010312610678575197386104c0565b8a80fd5b503d61065e565b84513d8d823e3d90fdfea2646970667358221220dde81a1b009803396e6cd3b1039f53989421c13295219844a3747db84bd6e24764736f6c63430008140033";

type EndpointV2ViewUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EndpointV2ViewUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EndpointV2ViewUpgradeable__factory extends ContractFactory {
  constructor(...args: EndpointV2ViewUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      EndpointV2ViewUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): EndpointV2ViewUpgradeable__factory {
    return super.connect(runner) as EndpointV2ViewUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EndpointV2ViewUpgradeableInterface {
    return new Interface(_abi) as EndpointV2ViewUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EndpointV2ViewUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as EndpointV2ViewUpgradeable;
  }
}
