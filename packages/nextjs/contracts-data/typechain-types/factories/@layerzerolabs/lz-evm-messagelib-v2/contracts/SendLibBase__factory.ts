/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  SendLibBase,
  SendLibBaseInterface,
} from "../../../../@layerzerolabs/lz-evm-messagelib-v2/contracts/SendLibBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    name: "LZ_MessageLib_InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "LZ_MessageLib_InvalidExecutor",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
    ],
    name: "LZ_MessageLib_InvalidMessageSize",
    type: "error",
  },
  {
    inputs: [],
    name: "LZ_MessageLib_OnlyEndpoint",
    type: "error",
  },
  {
    inputs: [],
    name: "LZ_MessageLib_TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "LZ_MessageLib_ZeroMessageSize",
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
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "maxMessageSize",
                type: "uint32",
              },
              {
                internalType: "address",
                name: "executor",
                type: "address",
              },
            ],
            internalType: "struct ExecutorConfig",
            name: "config",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct SetDefaultExecutorConfigParam[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "DefaultExecutorConfigsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oapp",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "maxMessageSize",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct ExecutorConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "ExecutorConfigSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "ExecutorFeePaid",
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
        indexed: false,
        internalType: "uint256",
        name: "newTreasuryNativeFeeCap",
        type: "uint256",
      },
    ],
    name: "TreasuryNativeFeeCapSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    name: "TreasurySet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oapp",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
    ],
    name: "executorConfigs",
    outputs: [
      {
        internalType: "uint32",
        name: "maxMessageSize",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "executor",
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
        name: "worker",
        type: "address",
      },
    ],
    name: "fees",
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
        internalType: "address",
        name: "_oapp",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_remoteEid",
        type: "uint32",
      },
    ],
    name: "getExecutorConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "maxMessageSize",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
        ],
        internalType: "struct ExecutorConfig",
        name: "rtnConfig",
        type: "tuple",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "maxMessageSize",
                type: "uint32",
              },
              {
                internalType: "address",
                name: "executor",
                type: "address",
              },
            ],
            internalType: "struct ExecutorConfig",
            name: "config",
            type: "tuple",
          },
        ],
        internalType: "struct SetDefaultExecutorConfigParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "setDefaultExecutorConfigs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newTreasuryNativeFeeCap",
        type: "uint256",
      },
    ],
    name: "setTreasuryNativeFeeCap",
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
  {
    inputs: [],
    name: "treasury",
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
] as const;

export class SendLibBase__factory {
  static readonly abi = _abi;
  static createInterface(): SendLibBaseInterface {
    return new Interface(_abi) as SendLibBaseInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SendLibBase {
    return new Contract(address, _abi, runner) as unknown as SendLibBase;
  }
}