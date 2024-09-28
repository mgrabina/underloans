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
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  OptionsBuilder,
  OptionsBuilderInterface,
} from "../../../../../../@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "optionType",
        type: "uint16",
      },
    ],
    name: "InvalidOptionType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "InvalidSize",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220f49365d8a9f9af402bb36eed7a26e3d4a540789820f11df127ad3c83b6e0cfca64736f6c63430008140033";

type OptionsBuilderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OptionsBuilderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OptionsBuilder__factory extends ContractFactory {
  constructor(...args: OptionsBuilderConstructorParams) {
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
      OptionsBuilder & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): OptionsBuilder__factory {
    return super.connect(runner) as OptionsBuilder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptionsBuilderInterface {
    return new Interface(_abi) as OptionsBuilderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OptionsBuilder {
    return new Contract(address, _abi, runner) as unknown as OptionsBuilder;
  }
}