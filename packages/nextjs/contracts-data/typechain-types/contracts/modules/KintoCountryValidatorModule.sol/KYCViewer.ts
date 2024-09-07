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
} from "../../../common";

export declare namespace KYCViewer {
  export type UserInfoStruct = {
    ownerBalance: BigNumberish;
    walletBalance: BigNumberish;
    walletPolicy: BigNumberish;
    walletOwners: AddressLike[];
    claimedFaucet: boolean;
    hasNFT: boolean;
    engenCreditsEarned: BigNumberish;
    engenCreditsClaimed: BigNumberish;
    isKYC: boolean;
    recoveryTs: BigNumberish;
    insurancePolicy: BigNumberish;
    hasValidInsurance: boolean;
    insuranceTimestamp: BigNumberish;
    deployer: AddressLike;
  };

  export type UserInfoStructOutput = [
    ownerBalance: bigint,
    walletBalance: bigint,
    walletPolicy: bigint,
    walletOwners: string[],
    claimedFaucet: boolean,
    hasNFT: boolean,
    engenCreditsEarned: bigint,
    engenCreditsClaimed: bigint,
    isKYC: boolean,
    recoveryTs: bigint,
    insurancePolicy: bigint,
    hasValidInsurance: boolean,
    insuranceTimestamp: bigint,
    deployer: string
  ] & {
    ownerBalance: bigint;
    walletBalance: bigint;
    walletPolicy: bigint;
    walletOwners: string[];
    claimedFaucet: boolean;
    hasNFT: boolean;
    engenCreditsEarned: bigint;
    engenCreditsClaimed: bigint;
    isKYC: boolean;
    recoveryTs: bigint;
    insurancePolicy: bigint;
    hasValidInsurance: boolean;
    insuranceTimestamp: bigint;
    deployer: string;
  };
}

export interface KYCViewerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getBalances"
      | "getCountry"
      | "getUserInfo"
      | "hasTrait"
      | "isCompany"
      | "isIndividual"
      | "isKYC"
      | "isSanctionsSafe"
      | "isSanctionsSafeIn"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBalances",
    values: [AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCountry",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserInfo",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasTrait",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isCompany",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isIndividual",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isKYC", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "isSanctionsSafe",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isSanctionsSafeIn",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCountry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasTrait", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isCompany", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isIndividual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isKYC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSanctionsSafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSanctionsSafeIn",
    data: BytesLike
  ): Result;
}

export interface KYCViewer extends BaseContract {
  connect(runner?: ContractRunner | null): KYCViewer;
  waitForDeployment(): Promise<this>;

  interface: KYCViewerInterface;

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

  getBalances: TypedContractMethod<
    [tokens: AddressLike[], target: AddressLike],
    [bigint[]],
    "view"
  >;

  getCountry: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  getUserInfo: TypedContractMethod<
    [_account: AddressLike, _wallet: AddressLike],
    [KYCViewer.UserInfoStructOutput],
    "view"
  >;

  hasTrait: TypedContractMethod<
    [_account: AddressLike, _traitId: BigNumberish],
    [boolean],
    "view"
  >;

  isCompany: TypedContractMethod<[_account: AddressLike], [boolean], "view">;

  isIndividual: TypedContractMethod<[_account: AddressLike], [boolean], "view">;

  isKYC: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  isSanctionsSafe: TypedContractMethod<
    [_account: AddressLike],
    [boolean],
    "view"
  >;

  isSanctionsSafeIn: TypedContractMethod<
    [_account: AddressLike, _countryId: BigNumberish],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getBalances"
  ): TypedContractMethod<
    [tokens: AddressLike[], target: AddressLike],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCountry"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUserInfo"
  ): TypedContractMethod<
    [_account: AddressLike, _wallet: AddressLike],
    [KYCViewer.UserInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasTrait"
  ): TypedContractMethod<
    [_account: AddressLike, _traitId: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isCompany"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isIndividual"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isKYC"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSanctionsSafe"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSanctionsSafeIn"
  ): TypedContractMethod<
    [_account: AddressLike, _countryId: BigNumberish],
    [boolean],
    "view"
  >;

  filters: {};
}