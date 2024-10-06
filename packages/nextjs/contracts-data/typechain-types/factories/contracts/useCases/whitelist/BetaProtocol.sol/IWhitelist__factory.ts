/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IWhitelist,
  IWhitelistInterface,
} from "../../../../../contracts/useCases/whitelist/BetaProtocol.sol/IWhitelist";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isWhitelisted",
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

export class IWhitelist__factory {
  static readonly abi = _abi;
  static createInterface(): IWhitelistInterface {
    return new Interface(_abi) as IWhitelistInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IWhitelist {
    return new Contract(address, _abi, runner) as unknown as IWhitelist;
  }
}