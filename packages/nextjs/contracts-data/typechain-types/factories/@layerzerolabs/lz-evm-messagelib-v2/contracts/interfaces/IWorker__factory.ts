/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IWorker,
  IWorkerInterface,
} from "../../../../../@layerzerolabs/lz-evm-messagelib-v2/contracts/interfaces/IWorker";

const _abi = [
  {
    inputs: [],
    name: "Worker_NotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "Worker_OnlyMessageLib",
    type: "error",
  },
  {
    inputs: [],
    name: "Worker_RoleRenouncingDisabled",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "multiplierBps",
        type: "uint16",
      },
    ],
    name: "SetDefaultMultiplierBps",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "priceFeed",
        type: "address",
      },
    ],
    name: "SetPriceFeed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "dstEid",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint8[]",
        name: "optionTypes",
        type: "uint8[]",
      },
    ],
    name: "SetSupportedOptionTypes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "workerLib",
        type: "address",
      },
    ],
    name: "SetWorkerLib",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lib",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "defaultMultiplierBps",
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
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
    ],
    name: "getSupportedOptionTypes",
    outputs: [
      {
        internalType: "uint8[]",
        name: "",
        type: "uint8[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed",
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
        internalType: "uint16",
        name: "_multiplierBps",
        type: "uint16",
      },
    ],
    name: "setDefaultMultiplierBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
    ],
    name: "setPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "uint8[]",
        name: "_optionTypes",
        type: "uint8[]",
      },
    ],
    name: "setSupportedOptionTypes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lib",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IWorker__factory {
  static readonly abi = _abi;
  static createInterface(): IWorkerInterface {
    return new Interface(_abi) as IWorkerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IWorker {
    return new Contract(address, _abi, runner) as unknown as IWorker;
  }
}
