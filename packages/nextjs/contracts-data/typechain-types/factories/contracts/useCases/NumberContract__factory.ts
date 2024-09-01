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
  NumberContract,
  NumberContractInterface,
} from "../../../contracts/useCases/NumberContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract EarlyAccessCodes",
        name: "_earlyAccessCodes",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "Success",
    type: "event",
  },
  {
    inputs: [],
    name: "earlyAccessCodes",
    outputs: [
      {
        internalType: "contract EarlyAccessCodes",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
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
        internalType: "bytes[]",
        name: "_validationsArgs",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161042b38038061042b83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610398806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635b0467a6146100465780638381f58a14610076578063b95f19e01461008d575b600080fd5b600054610059906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61007f60015481565b60405190815260200161006d565b6100a061009b3660046101a0565b6100a2565b005b60005460405163048be6e760e51b81526001600160a01b039091169063917cdce0906100e0908b908b908b908b908b9033908c908c9060040161028b565b600060405180830381600087803b1580156100fa57600080fd5b505af115801561010e573d6000803e3d6000fd5b50505060018281556040519081527f3b0a8ddef325df2bfdfa6b430ae4c8421841cd135bfa8fb5e432f200787520bb915060200160405180910390a15050505050505050565b60008083601f84011261016657600080fd5b50813567ffffffffffffffff81111561017e57600080fd5b6020830191508360208260051b850101111561019957600080fd5b9250929050565b60008060008060008060008060c0898b0312156101bc57600080fd5b88359750602089013567ffffffffffffffff808211156101db57600080fd5b818b0191508b601f8301126101ef57600080fd5b8135818111156101fe57600080fd5b8c602082850101111561021057600080fd5b6020830199508098505060408b0135965060608b0135955060808b013591508082111561023c57600080fd5b506102498b828c01610154565b999c989b50969995989497949560a00135949350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8881526000602060c0818401526102a660c084018a8c610262565b60408401899052606084018890526001600160a01b038716608085015283810360a0850152848152818101600586901b820183018760005b8881101561034e57848303601f190184528135368b9003601e1901811261030457600080fd5b8a01868101903567ffffffffffffffff81111561032057600080fd5b80360382131561032f57600080fd5b61033a858284610262565b9588019594505050908501906001016102de565b50909e9d505050505050505050505050505056fea26469706673582212206d0c8adf2eb1818e8168c7e2d59389bc307e4a38d3f92464330524019fc0dc9064736f6c63430008140033";

type NumberContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NumberContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NumberContract__factory extends ContractFactory {
  constructor(...args: NumberContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _earlyAccessCodes: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_earlyAccessCodes, overrides || {});
  }
  override deploy(
    _earlyAccessCodes: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_earlyAccessCodes, overrides || {}) as Promise<
      NumberContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NumberContract__factory {
    return super.connect(runner) as NumberContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NumberContractInterface {
    return new Interface(_abi) as NumberContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NumberContract {
    return new Contract(address, _abi, runner) as unknown as NumberContract;
  }
}