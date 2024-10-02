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

export interface BetaProtocolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "betaAccessEnabled"
      | "owner"
      | "renounceOwnership"
      | "setBetaAccessEnabled"
      | "transferOwnership"
      | "whitelist"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddressNotAllowed"
      | "BetaAccessDisabled"
      | "BetaAccessEnabled"
      | "OwnershipTransferred"
      | "WhitelistCodeUsed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "betaAccessEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBetaAccessEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "betaAccessEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBetaAccessEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
}

export namespace AddressNotAllowedEvent {
  export type InputTuple = [user: AddressLike, timestamp: BigNumberish];
  export type OutputTuple = [user: string, timestamp: bigint];
  export interface OutputObject {
    user: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BetaAccessDisabledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BetaAccessEnabledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
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

export namespace WhitelistCodeUsedEvent {
  export type InputTuple = [user: AddressLike, timestamp: BigNumberish];
  export type OutputTuple = [user: string, timestamp: bigint];
  export interface OutputObject {
    user: string;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BetaProtocol extends BaseContract {
  connect(runner?: ContractRunner | null): BetaProtocol;
  waitForDeployment(): Promise<this>;

  interface: BetaProtocolInterface;

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

  betaAccessEnabled: TypedContractMethod<[], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setBetaAccessEnabled: TypedContractMethod<
    [_enabled: boolean],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  whitelist: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "betaAccessEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBetaAccessEnabled"
  ): TypedContractMethod<[_enabled: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelist"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AddressNotAllowed"
  ): TypedContractEvent<
    AddressNotAllowedEvent.InputTuple,
    AddressNotAllowedEvent.OutputTuple,
    AddressNotAllowedEvent.OutputObject
  >;
  getEvent(
    key: "BetaAccessDisabled"
  ): TypedContractEvent<
    BetaAccessDisabledEvent.InputTuple,
    BetaAccessDisabledEvent.OutputTuple,
    BetaAccessDisabledEvent.OutputObject
  >;
  getEvent(
    key: "BetaAccessEnabled"
  ): TypedContractEvent<
    BetaAccessEnabledEvent.InputTuple,
    BetaAccessEnabledEvent.OutputTuple,
    BetaAccessEnabledEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistCodeUsed"
  ): TypedContractEvent<
    WhitelistCodeUsedEvent.InputTuple,
    WhitelistCodeUsedEvent.OutputTuple,
    WhitelistCodeUsedEvent.OutputObject
  >;

  filters: {
    "AddressNotAllowed(address,uint256)": TypedContractEvent<
      AddressNotAllowedEvent.InputTuple,
      AddressNotAllowedEvent.OutputTuple,
      AddressNotAllowedEvent.OutputObject
    >;
    AddressNotAllowed: TypedContractEvent<
      AddressNotAllowedEvent.InputTuple,
      AddressNotAllowedEvent.OutputTuple,
      AddressNotAllowedEvent.OutputObject
    >;

    "BetaAccessDisabled()": TypedContractEvent<
      BetaAccessDisabledEvent.InputTuple,
      BetaAccessDisabledEvent.OutputTuple,
      BetaAccessDisabledEvent.OutputObject
    >;
    BetaAccessDisabled: TypedContractEvent<
      BetaAccessDisabledEvent.InputTuple,
      BetaAccessDisabledEvent.OutputTuple,
      BetaAccessDisabledEvent.OutputObject
    >;

    "BetaAccessEnabled()": TypedContractEvent<
      BetaAccessEnabledEvent.InputTuple,
      BetaAccessEnabledEvent.OutputTuple,
      BetaAccessEnabledEvent.OutputObject
    >;
    BetaAccessEnabled: TypedContractEvent<
      BetaAccessEnabledEvent.InputTuple,
      BetaAccessEnabledEvent.OutputTuple,
      BetaAccessEnabledEvent.OutputObject
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

    "WhitelistCodeUsed(address,uint256)": TypedContractEvent<
      WhitelistCodeUsedEvent.InputTuple,
      WhitelistCodeUsedEvent.OutputTuple,
      WhitelistCodeUsedEvent.OutputObject
    >;
    WhitelistCodeUsed: TypedContractEvent<
      WhitelistCodeUsedEvent.InputTuple,
      WhitelistCodeUsedEvent.OutputTuple,
      WhitelistCodeUsedEvent.OutputObject
    >;
  };
}
