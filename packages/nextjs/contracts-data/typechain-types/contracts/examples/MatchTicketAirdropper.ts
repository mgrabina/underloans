/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface MatchTicketAirdropperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FIELD_SIZE"
      | "ROOT_HISTORY_SIZE"
      | "TransferAmounts"
      | "TransferIds"
      | "ZERO_VALUE"
      | "bulkConsumeMatchTicketAirdrop"
      | "bulkCreateMatchTicketAirdrop"
      | "commitments"
      | "consumeCode"
      | "consumeMatchTicketAirdrop"
      | "consumeTransfer"
      | "consumed"
      | "createMatchTicketAirdrop"
      | "createTransfer"
      | "currentRootIndex"
      | "filledSubtrees"
      | "getLastRoot"
      | "hashLeftRight"
      | "hasher"
      | "isKnownRoot"
      | "isSpent"
      | "isSpentArray"
      | "levels"
      | "limits"
      | "nextIndex"
      | "nullifierHashes"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "roots"
      | "setCode"
      | "supportsInterface"
      | "token"
      | "validationModules"
      | "verifier"
      | "zeros"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ConsumeCode" | "NewCode" | "Success"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TransferAmounts",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "TransferIds",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bulkConsumeMatchTicketAirdrop",
    values: [
      BytesLike[],
      BytesLike[],
      BytesLike[],
      BytesLike[],
      AddressLike[],
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bulkCreateMatchTicketAirdrop",
    values: [
      BytesLike[],
      AddressLike[][],
      BigNumberish[],
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "consumeCode",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      AddressLike,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "consumeMatchTicketAirdrop",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      AddressLike,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "consumeTransfer",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      AddressLike,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "consumed", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "createMatchTicketAirdrop",
    values: [BytesLike, AddressLike[], BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createTransfer",
    values: [BytesLike, AddressLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isSpentArray",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "limits", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setCode",
    values: [BytesLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validationModules",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TransferAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TransferIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bulkConsumeMatchTicketAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bulkCreateMatchTicketAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "consumeCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "consumeMatchTicketAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "consumeTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "consumed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createMatchTicketAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSpentArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setCode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validationModules",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}

export namespace ConsumeCodeEvent {
  export type InputTuple = [
    to: AddressLike,
    nullifierHash: BytesLike,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    to: string,
    nullifierHash: string,
    timestamp: bigint
  ];
  export interface OutputObject {
    to: string;
    nullifierHash: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewCodeEvent {
  export type InputTuple = [
    commitment: BytesLike,
    leafIndex: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    commitment: string,
    leafIndex: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    commitment: string;
    leafIndex: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuccessEvent {
  export type InputTuple = [success: boolean];
  export type OutputTuple = [success: boolean];
  export interface OutputObject {
    success: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MatchTicketAirdropper extends BaseContract {
  connect(runner?: ContractRunner | null): MatchTicketAirdropper;
  waitForDeployment(): Promise<this>;

  interface: MatchTicketAirdropperInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  FIELD_SIZE: TypedContractMethod<[], [bigint], "view">;

  ROOT_HISTORY_SIZE: TypedContractMethod<[], [bigint], "view">;

  TransferAmounts: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  TransferIds: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  ZERO_VALUE: TypedContractMethod<[], [bigint], "view">;

  bulkConsumeMatchTicketAirdrop: TypedContractMethod<
    [
      _commitments: BytesLike[],
      _proofs: BytesLike[],
      _roots: BytesLike[],
      _nullifierHashes: BytesLike[],
      _tos: AddressLike[],
      _validationsArgs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  bulkCreateMatchTicketAirdrop: TypedContractMethod<
    [
      _commitments: BytesLike[],
      _validationModules: AddressLike[][],
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _limits: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  commitments: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  consumeCode: TypedContractMethod<
    [
      _commitment: BytesLike,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: AddressLike,
      _validationsArgs: BytesLike[]
    ],
    [void],
    "payable"
  >;

  consumeMatchTicketAirdrop: TypedContractMethod<
    [
      _commitment: BytesLike,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _to: AddressLike,
      _validationsArgs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  consumeTransfer: TypedContractMethod<
    [
      _commitment: BytesLike,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _to: AddressLike,
      _validationsArgs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  consumed: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  createMatchTicketAirdrop: TypedContractMethod<
    [
      _commitment: BytesLike,
      _validationModules: AddressLike[],
      _id: BigNumberish,
      _value: BigNumberish,
      limit: BigNumberish
    ],
    [void],
    "payable"
  >;

  createTransfer: TypedContractMethod<
    [
      _commitment: BytesLike,
      _validationModules: AddressLike[],
      _id: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  currentRootIndex: TypedContractMethod<[], [bigint], "view">;

  filledSubtrees: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getLastRoot: TypedContractMethod<[], [string], "view">;

  hashLeftRight: TypedContractMethod<
    [_hasher: AddressLike, _left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;

  hasher: TypedContractMethod<[], [string], "view">;

  isKnownRoot: TypedContractMethod<[_root: BytesLike], [boolean], "view">;

  isSpent: TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;

  isSpentArray: TypedContractMethod<
    [_nullifierHashes: BytesLike[]],
    [boolean[]],
    "view"
  >;

  levels: TypedContractMethod<[], [bigint], "view">;

  limits: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  nextIndex: TypedContractMethod<[], [bigint], "view">;

  nullifierHashes: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  roots: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  setCode: TypedContractMethod<
    [_commitment: BytesLike, _validationModules: AddressLike[]],
    [void],
    "payable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  validationModules: TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  verifier: TypedContractMethod<[], [string], "view">;

  zeros: TypedContractMethod<[i: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "FIELD_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ROOT_HISTORY_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "TransferAmounts"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "TransferIds"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZERO_VALUE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bulkConsumeMatchTicketAirdrop"
  ): TypedContractMethod<
    [
      _commitments: BytesLike[],
      _proofs: BytesLike[],
      _roots: BytesLike[],
      _nullifierHashes: BytesLike[],
      _tos: AddressLike[],
      _validationsArgs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bulkCreateMatchTicketAirdrop"
  ): TypedContractMethod<
    [
      _commitments: BytesLike[],
      _validationModules: AddressLike[][],
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _limits: BigNumberish[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "commitments"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "consumeCode"
  ): TypedContractMethod<
    [
      _commitment: BytesLike,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: AddressLike,
      _validationsArgs: BytesLike[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "consumeMatchTicketAirdrop"
  ): TypedContractMethod<
    [
      _commitment: BytesLike,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _to: AddressLike,
      _validationsArgs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "consumeTransfer"
  ): TypedContractMethod<
    [
      _commitment: BytesLike,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _to: AddressLike,
      _validationsArgs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "consumed"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "createMatchTicketAirdrop"
  ): TypedContractMethod<
    [
      _commitment: BytesLike,
      _validationModules: AddressLike[],
      _id: BigNumberish,
      _value: BigNumberish,
      limit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createTransfer"
  ): TypedContractMethod<
    [
      _commitment: BytesLike,
      _validationModules: AddressLike[],
      _id: BigNumberish,
      _amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "currentRootIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "filledSubtrees"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getLastRoot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "hashLeftRight"
  ): TypedContractMethod<
    [_hasher: AddressLike, _left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasher"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isKnownRoot"
  ): TypedContractMethod<[_root: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSpent"
  ): TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSpentArray"
  ): TypedContractMethod<[_nullifierHashes: BytesLike[]], [boolean[]], "view">;
  getFunction(
    nameOrSignature: "levels"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "limits"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nullifierHashes"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "roots"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "setCode"
  ): TypedContractMethod<
    [_commitment: BytesLike, _validationModules: AddressLike[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "validationModules"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "zeros"
  ): TypedContractMethod<[i: BigNumberish], [string], "view">;

  getEvent(
    key: "ConsumeCode"
  ): TypedContractEvent<
    ConsumeCodeEvent.InputTuple,
    ConsumeCodeEvent.OutputTuple,
    ConsumeCodeEvent.OutputObject
  >;
  getEvent(
    key: "NewCode"
  ): TypedContractEvent<
    NewCodeEvent.InputTuple,
    NewCodeEvent.OutputTuple,
    NewCodeEvent.OutputObject
  >;
  getEvent(
    key: "Success"
  ): TypedContractEvent<
    SuccessEvent.InputTuple,
    SuccessEvent.OutputTuple,
    SuccessEvent.OutputObject
  >;

  filters: {
    "ConsumeCode(address,bytes32,uint256)": TypedContractEvent<
      ConsumeCodeEvent.InputTuple,
      ConsumeCodeEvent.OutputTuple,
      ConsumeCodeEvent.OutputObject
    >;
    ConsumeCode: TypedContractEvent<
      ConsumeCodeEvent.InputTuple,
      ConsumeCodeEvent.OutputTuple,
      ConsumeCodeEvent.OutputObject
    >;

    "NewCode(bytes32,uint32,uint256)": TypedContractEvent<
      NewCodeEvent.InputTuple,
      NewCodeEvent.OutputTuple,
      NewCodeEvent.OutputObject
    >;
    NewCode: TypedContractEvent<
      NewCodeEvent.InputTuple,
      NewCodeEvent.OutputTuple,
      NewCodeEvent.OutputObject
    >;

    "Success(bool)": TypedContractEvent<
      SuccessEvent.InputTuple,
      SuccessEvent.OutputTuple,
      SuccessEvent.OutputObject
    >;
    Success: TypedContractEvent<
      SuccessEvent.InputTuple,
      SuccessEvent.OutputTuple,
      SuccessEvent.OutputObject
    >;
  };
}
