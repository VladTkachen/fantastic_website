/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MessageBusInterface extends ethers.utils.Interface {
  functions: {
    "executeMessage(bytes,tuple,bytes[],address[],uint256[])": FunctionFragment;
    "executeMessageWithTransfer(bytes,tuple,bytes[],address[],uint256[])": FunctionFragment;
    "executedMessages(bytes32)": FunctionFragment;
    "executedTransfers(bytes32)": FunctionFragment;
    "feeBase()": FunctionFragment;
    "feePerByte()": FunctionFragment;
    "liquidityBridge()": FunctionFragment;
    "owner()": FunctionFragment;
    "pegBridge()": FunctionFragment;
    "pegVault()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendMessage(address,uint256,bytes)": FunctionFragment;
    "sendMessageWithTransfer(address,uint256,address,bytes32,bytes)": FunctionFragment;
    "setFeeBase(uint256)": FunctionFragment;
    "setFeePerByte(uint256)": FunctionFragment;
    "setLiquidityBridge(address)": FunctionFragment;
    "setPegBridge(address)": FunctionFragment;
    "setPegVault(address)": FunctionFragment;
    "sigsVerifier()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawFee(address,uint256,bytes[],address[],uint256[])": FunctionFragment;
    "withdrawnFees(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "executeMessage",
    values: [
      BytesLike,
      { sender: string; receiver: string; srcChainId: BigNumberish },
      BytesLike[],
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [
      BytesLike,
      {
        t: BigNumberish;
        sender: string;
        receiver: string;
        token: string;
        amount: BigNumberish;
        seqnum: BigNumberish;
        srcChainId: BigNumberish;
        refId: BytesLike;
      },
      BytesLike[],
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executedMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executedTransfers",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "feeBase", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feePerByte",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBridge",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pegBridge", values?: undefined): string;
  encodeFunctionData(functionFragment: "pegVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageWithTransfer",
    values: [string, BigNumberish, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeBase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeePerByte",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidityBridge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPegBridge",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setPegVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sigsVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values: [string, BigNumberish, BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawnFees",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executedTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeBase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feePerByte", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pegBridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pegVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeBase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeePerByte",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidityBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPegBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPegVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sigsVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawnFees",
    data: BytesLike
  ): Result;

  events: {
    "Executed(uint8,bytes32,uint8)": EventFragment;
    "Message(address,address,uint256,bytes)": EventFragment;
    "MessageWithTransfer(address,address,uint256,address,bytes32,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Message"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageWithTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class MessageBus extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MessageBusInterface;

  functions: {
    executeMessage(
      _message: BytesLike,
      _route: { sender: string; receiver: string; srcChainId: BigNumberish },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: {
        t: BigNumberish;
        sender: string;
        receiver: string;
        token: string;
        amount: BigNumberish;
        seqnum: BigNumberish;
        srcChainId: BigNumberish;
        refId: BytesLike;
      },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    executedTransfers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    feeBase(overrides?: CallOverrides): Promise<[BigNumber]>;

    feePerByte(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityBridge(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pegBridge(overrides?: CallOverrides): Promise<[string]>;

    pegVault(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _bridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeBase(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeePerByte(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidityBridge(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPegBridge(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPegVault(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sigsVerifier(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawnFees(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  executeMessage(
    _message: BytesLike,
    _route: { sender: string; receiver: string; srcChainId: BigNumberish },
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    _message: BytesLike,
    _transfer: {
      t: BigNumberish;
      sender: string;
      receiver: string;
      token: string;
      amount: BigNumberish;
      seqnum: BigNumberish;
      srcChainId: BigNumberish;
      refId: BytesLike;
    },
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executedMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

  executedTransfers(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  feeBase(overrides?: CallOverrides): Promise<BigNumber>;

  feePerByte(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityBridge(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pegBridge(overrides?: CallOverrides): Promise<string>;

  pegVault(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessage(
    _receiver: string,
    _dstChainId: BigNumberish,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessageWithTransfer(
    _receiver: string,
    _dstChainId: BigNumberish,
    _bridge: string,
    _srcTransferId: BytesLike,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeBase(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeePerByte(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidityBridge(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPegBridge(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPegVault(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sigsVerifier(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFee(
    _account: string,
    _cumulativeFee: BigNumberish,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawnFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    executeMessage(
      _message: BytesLike,
      _route: { sender: string; receiver: string; srcChainId: BigNumberish },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: {
        t: BigNumberish;
        sender: string;
        receiver: string;
        token: string;
        amount: BigNumberish;
        seqnum: BigNumberish;
        srcChainId: BigNumberish;
        refId: BytesLike;
      },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    executedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    executedTransfers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    feeBase(overrides?: CallOverrides): Promise<BigNumber>;

    feePerByte(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityBridge(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pegBridge(overrides?: CallOverrides): Promise<string>;

    pegVault(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _bridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeBase(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setFeePerByte(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setLiquidityBridge(_addr: string, overrides?: CallOverrides): Promise<void>;

    setPegBridge(_addr: string, overrides?: CallOverrides): Promise<void>;

    setPegVault(_addr: string, overrides?: CallOverrides): Promise<void>;

    sigsVerifier(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawnFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Executed(
      msgType?: null,
      id?: null,
      status?: null
    ): TypedEventFilter<
      [number, string, number],
      { msgType: number; id: string; status: number }
    >;

    Message(
      sender?: string | null,
      receiver?: null,
      dstChainId?: null,
      message?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      {
        sender: string;
        receiver: string;
        dstChainId: BigNumber;
        message: string;
      }
    >;

    MessageWithTransfer(
      sender?: string | null,
      receiver?: null,
      dstChainId?: null,
      bridge?: null,
      srcTransferId?: null,
      message?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, string],
      {
        sender: string;
        receiver: string;
        dstChainId: BigNumber;
        bridge: string;
        srcTransferId: string;
        message: string;
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    executeMessage(
      _message: BytesLike,
      _route: { sender: string; receiver: string; srcChainId: BigNumberish },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: {
        t: BigNumberish;
        sender: string;
        receiver: string;
        token: string;
        amount: BigNumberish;
        seqnum: BigNumberish;
        srcChainId: BigNumberish;
        refId: BytesLike;
      },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executedTransfers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeBase(overrides?: CallOverrides): Promise<BigNumber>;

    feePerByte(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityBridge(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pegBridge(overrides?: CallOverrides): Promise<BigNumber>;

    pegVault(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _bridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeBase(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeePerByte(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidityBridge(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPegBridge(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPegVault(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sigsVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawnFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    executeMessage(
      _message: BytesLike,
      _route: { sender: string; receiver: string; srcChainId: BigNumberish },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: {
        t: BigNumberish;
        sender: string;
        receiver: string;
        token: string;
        amount: BigNumberish;
        seqnum: BigNumberish;
        srcChainId: BigNumberish;
        refId: BytesLike;
      },
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executedTransfers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feePerByte(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _bridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeBase(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeePerByte(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidityBridge(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPegBridge(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPegVault(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sigsVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawnFees(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
