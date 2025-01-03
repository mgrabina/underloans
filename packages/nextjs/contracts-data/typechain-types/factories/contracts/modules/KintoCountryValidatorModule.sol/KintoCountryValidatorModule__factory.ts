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
import type { NonPayableOverrides } from "../../../../common";
import type {
  KintoCountryValidatorModule,
  KintoCountryValidatorModuleInterface,
} from "../../../../contracts/modules/KintoCountryValidatorModule.sol/KintoCountryValidatorModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_KYCViewerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "KYCViewerAddress",
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
    name: "country",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "arg",
        type: "bytes",
      },
    ],
    name: "validate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007957601f6102aa38819003918201601f19168301916001600160401b0383118484101761007e5780849260209460405283398101031261007957516001600160a01b0381169081900361007957600080546001600160b01b031916909117600160a51b17905560405161021590816100958239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826362c2e53f146101bb57508163c16e50ef1461006c575063d8b0b4991461004657600080fd5b3461006857816003193601126100685761ffff6020925460a01c169051908152f35b5080fd5b9050346101b7576020928360031936011261018f5767ffffffffffffffff908235828111610068573660238201121561006857808401358381116101b7573691016024011161018f578054845163d821f92d60e01b8152338582015290919086816024816001600160a01b0387165afa9384156101ad578294610146575b50505061ffff809160a01c1691160361010557505160018152f35b82606492519162461bcd60e51b8352820152601a60248201527f55736572206973206e6f742066726f6d20417267656e74696e610000000000006044820152fd5b909192935086903d88116101a5575b601f8201601f1916830190811183821017610192578791839188528101031261006857519061ffff8216820361018f5750903880806100ea565b80fd5b634e487b7160e01b845260418652602484fd5b3d9150610155565b86513d84823e3d90fd5b8280fd5b84903461006857816003193601126100685790546001600160a01b03168152602090f3fea2646970667358221220befa970170762f4f59fa5fb5c84238f770ecb8dbcff689d3743385c3be9142dd64736f6c63430008140033";

type KintoCountryValidatorModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KintoCountryValidatorModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KintoCountryValidatorModule__factory extends ContractFactory {
  constructor(...args: KintoCountryValidatorModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _KYCViewerAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_KYCViewerAddress, overrides || {});
  }
  override deploy(
    _KYCViewerAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_KYCViewerAddress, overrides || {}) as Promise<
      KintoCountryValidatorModule & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): KintoCountryValidatorModule__factory {
    return super.connect(runner) as KintoCountryValidatorModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KintoCountryValidatorModuleInterface {
    return new Interface(_abi) as KintoCountryValidatorModuleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): KintoCountryValidatorModule {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as KintoCountryValidatorModule;
  }
}
