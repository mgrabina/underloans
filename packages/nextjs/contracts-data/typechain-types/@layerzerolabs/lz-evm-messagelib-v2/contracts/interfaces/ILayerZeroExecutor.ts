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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface ILayerZeroExecutorInterface extends Interface {
  getFunction(nameOrSignature: "assignJob" | "getFee"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assignJob",
    values: [BigNumberish, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish, AddressLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "assignJob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
}

export interface ILayerZeroExecutor extends BaseContract {
  connect(runner?: ContractRunner | null): ILayerZeroExecutor;
  waitForDeployment(): Promise<this>;

  interface: ILayerZeroExecutorInterface;

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

  assignJob: TypedContractMethod<
    [
      _dstEid: BigNumberish,
      _sender: AddressLike,
      _calldataSize: BigNumberish,
      _options: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  getFee: TypedContractMethod<
    [
      _dstEid: BigNumberish,
      _sender: AddressLike,
      _calldataSize: BigNumberish,
      _options: BytesLike
    ],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assignJob"
  ): TypedContractMethod<
    [
      _dstEid: BigNumberish,
      _sender: AddressLike,
      _calldataSize: BigNumberish,
      _options: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getFee"
  ): TypedContractMethod<
    [
      _dstEid: BigNumberish,
      _sender: AddressLike,
      _calldataSize: BigNumberish,
      _options: BytesLike
    ],
    [bigint],
    "view"
  >;

  filters: {};
}
