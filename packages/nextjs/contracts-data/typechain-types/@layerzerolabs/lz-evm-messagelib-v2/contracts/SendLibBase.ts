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
} from "../../../common";

export type ExecutorConfigStruct = {
  maxMessageSize: BigNumberish;
  executor: AddressLike;
};

export type ExecutorConfigStructOutput = [
  maxMessageSize: bigint,
  executor: string
] & { maxMessageSize: bigint; executor: string };

export type SetDefaultExecutorConfigParamStruct = {
  eid: BigNumberish;
  config: ExecutorConfigStruct;
};

export type SetDefaultExecutorConfigParamStructOutput = [
  eid: bigint,
  config: ExecutorConfigStructOutput
] & { eid: bigint; config: ExecutorConfigStructOutput };

export interface SendLibBaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "executorConfigs"
      | "fees"
      | "getExecutorConfig"
      | "owner"
      | "renounceOwnership"
      | "setDefaultExecutorConfigs"
      | "setTreasuryNativeFeeCap"
      | "transferOwnership"
      | "treasury"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DefaultExecutorConfigsSet"
      | "ExecutorConfigSet"
      | "ExecutorFeePaid"
      | "OwnershipTransferred"
      | "TreasuryNativeFeeCapSet"
      | "TreasurySet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "executorConfigs",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fees", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "getExecutorConfig",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultExecutorConfigs",
    values: [SetDefaultExecutorConfigParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryNativeFeeCap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "executorConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getExecutorConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultExecutorConfigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryNativeFeeCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
}

export namespace DefaultExecutorConfigsSetEvent {
  export type InputTuple = [params: SetDefaultExecutorConfigParamStruct[]];
  export type OutputTuple = [
    params: SetDefaultExecutorConfigParamStructOutput[]
  ];
  export interface OutputObject {
    params: SetDefaultExecutorConfigParamStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutorConfigSetEvent {
  export type InputTuple = [
    oapp: AddressLike,
    eid: BigNumberish,
    config: ExecutorConfigStruct
  ];
  export type OutputTuple = [
    oapp: string,
    eid: bigint,
    config: ExecutorConfigStructOutput
  ];
  export interface OutputObject {
    oapp: string;
    eid: bigint;
    config: ExecutorConfigStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutorFeePaidEvent {
  export type InputTuple = [executor: AddressLike, fee: BigNumberish];
  export type OutputTuple = [executor: string, fee: bigint];
  export interface OutputObject {
    executor: string;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TreasuryNativeFeeCapSetEvent {
  export type InputTuple = [newTreasuryNativeFeeCap: BigNumberish];
  export type OutputTuple = [newTreasuryNativeFeeCap: bigint];
  export interface OutputObject {
    newTreasuryNativeFeeCap: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TreasurySetEvent {
  export type InputTuple = [treasury: AddressLike];
  export type OutputTuple = [treasury: string];
  export interface OutputObject {
    treasury: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SendLibBase extends BaseContract {
  connect(runner?: ContractRunner | null): SendLibBase;
  waitForDeployment(): Promise<this>;

  interface: SendLibBaseInterface;

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

  executorConfigs: TypedContractMethod<
    [oapp: AddressLike, eid: BigNumberish],
    [[bigint, string] & { maxMessageSize: bigint; executor: string }],
    "view"
  >;

  fees: TypedContractMethod<[worker: AddressLike], [bigint], "view">;

  getExecutorConfig: TypedContractMethod<
    [_oapp: AddressLike, _remoteEid: BigNumberish],
    [ExecutorConfigStructOutput],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setDefaultExecutorConfigs: TypedContractMethod<
    [_params: SetDefaultExecutorConfigParamStruct[]],
    [void],
    "nonpayable"
  >;

  setTreasuryNativeFeeCap: TypedContractMethod<
    [_newTreasuryNativeFeeCap: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "executorConfigs"
  ): TypedContractMethod<
    [oapp: AddressLike, eid: BigNumberish],
    [[bigint, string] & { maxMessageSize: bigint; executor: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "fees"
  ): TypedContractMethod<[worker: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getExecutorConfig"
  ): TypedContractMethod<
    [_oapp: AddressLike, _remoteEid: BigNumberish],
    [ExecutorConfigStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDefaultExecutorConfigs"
  ): TypedContractMethod<
    [_params: SetDefaultExecutorConfigParamStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTreasuryNativeFeeCap"
  ): TypedContractMethod<
    [_newTreasuryNativeFeeCap: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "DefaultExecutorConfigsSet"
  ): TypedContractEvent<
    DefaultExecutorConfigsSetEvent.InputTuple,
    DefaultExecutorConfigsSetEvent.OutputTuple,
    DefaultExecutorConfigsSetEvent.OutputObject
  >;
  getEvent(
    key: "ExecutorConfigSet"
  ): TypedContractEvent<
    ExecutorConfigSetEvent.InputTuple,
    ExecutorConfigSetEvent.OutputTuple,
    ExecutorConfigSetEvent.OutputObject
  >;
  getEvent(
    key: "ExecutorFeePaid"
  ): TypedContractEvent<
    ExecutorFeePaidEvent.InputTuple,
    ExecutorFeePaidEvent.OutputTuple,
    ExecutorFeePaidEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "TreasuryNativeFeeCapSet"
  ): TypedContractEvent<
    TreasuryNativeFeeCapSetEvent.InputTuple,
    TreasuryNativeFeeCapSetEvent.OutputTuple,
    TreasuryNativeFeeCapSetEvent.OutputObject
  >;
  getEvent(
    key: "TreasurySet"
  ): TypedContractEvent<
    TreasurySetEvent.InputTuple,
    TreasurySetEvent.OutputTuple,
    TreasurySetEvent.OutputObject
  >;

  filters: {
    "DefaultExecutorConfigsSet(tuple[])": TypedContractEvent<
      DefaultExecutorConfigsSetEvent.InputTuple,
      DefaultExecutorConfigsSetEvent.OutputTuple,
      DefaultExecutorConfigsSetEvent.OutputObject
    >;
    DefaultExecutorConfigsSet: TypedContractEvent<
      DefaultExecutorConfigsSetEvent.InputTuple,
      DefaultExecutorConfigsSetEvent.OutputTuple,
      DefaultExecutorConfigsSetEvent.OutputObject
    >;

    "ExecutorConfigSet(address,uint32,tuple)": TypedContractEvent<
      ExecutorConfigSetEvent.InputTuple,
      ExecutorConfigSetEvent.OutputTuple,
      ExecutorConfigSetEvent.OutputObject
    >;
    ExecutorConfigSet: TypedContractEvent<
      ExecutorConfigSetEvent.InputTuple,
      ExecutorConfigSetEvent.OutputTuple,
      ExecutorConfigSetEvent.OutputObject
    >;

    "ExecutorFeePaid(address,uint256)": TypedContractEvent<
      ExecutorFeePaidEvent.InputTuple,
      ExecutorFeePaidEvent.OutputTuple,
      ExecutorFeePaidEvent.OutputObject
    >;
    ExecutorFeePaid: TypedContractEvent<
      ExecutorFeePaidEvent.InputTuple,
      ExecutorFeePaidEvent.OutputTuple,
      ExecutorFeePaidEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "TreasuryNativeFeeCapSet(uint256)": TypedContractEvent<
      TreasuryNativeFeeCapSetEvent.InputTuple,
      TreasuryNativeFeeCapSetEvent.OutputTuple,
      TreasuryNativeFeeCapSetEvent.OutputObject
    >;
    TreasuryNativeFeeCapSet: TypedContractEvent<
      TreasuryNativeFeeCapSetEvent.InputTuple,
      TreasuryNativeFeeCapSetEvent.OutputTuple,
      TreasuryNativeFeeCapSetEvent.OutputObject
    >;

    "TreasurySet(address)": TypedContractEvent<
      TreasurySetEvent.InputTuple,
      TreasurySetEvent.OutputTuple,
      TreasurySetEvent.OutputObject
    >;
    TreasurySet: TypedContractEvent<
      TreasurySetEvent.InputTuple,
      TreasurySetEvent.OutputTuple,
      TreasurySetEvent.OutputObject
    >;
  };
}