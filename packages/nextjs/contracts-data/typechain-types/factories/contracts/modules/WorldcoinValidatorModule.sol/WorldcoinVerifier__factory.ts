/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  WorldcoinVerifier,
  WorldcoinVerifierInterface,
} from "../../../../contracts/modules/WorldcoinValidatorModule.sol/WorldcoinVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "verifyProof",
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

export class WorldcoinVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): WorldcoinVerifierInterface {
    return new Interface(_abi) as WorldcoinVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WorldcoinVerifier {
    return new Contract(address, _abi, runner) as unknown as WorldcoinVerifier;
  }
}