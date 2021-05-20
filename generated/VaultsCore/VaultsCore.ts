// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Borrowed extends ethereum.Event {
  get params(): Borrowed__Params {
    return new Borrowed__Params(this);
  }
}

export class Borrowed__Params {
  _event: Borrowed;

  constructor(event: Borrowed) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Deposited extends ethereum.Event {
  get params(): Deposited__Params {
    return new Deposited__Params(this);
  }
}

export class Deposited__Params {
  _event: Deposited;

  constructor(event: Deposited) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class InsurancePaid extends ethereum.Event {
  get params(): InsurancePaid__Params {
    return new InsurancePaid__Params(this);
  }
}

export class InsurancePaid__Params {
  _event: InsurancePaid;

  constructor(event: InsurancePaid) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get insuranceAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Liquidated extends ethereum.Event {
  get params(): Liquidated__Params {
    return new Liquidated__Params(this);
  }
}

export class Liquidated__Params {
  _event: Liquidated;

  constructor(event: Liquidated) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get debtRepaid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get collateralLiquidated(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Opened extends ethereum.Event {
  get params(): Opened__Params {
    return new Opened__Params(this);
  }
}

export class Opened__Params {
  _event: Opened;

  constructor(event: Opened) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get collateralType(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Repaid extends ethereum.Event {
  get params(): Repaid__Params {
    return new Repaid__Params(this);
  }
}

export class Repaid__Params {
  _event: Repaid;

  constructor(event: Repaid) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class VaultsCore extends ethereum.SmartContract {
  static bind(address: Address): VaultsCore {
    return new VaultsCore("VaultsCore", address);
  }

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  a(): Address {
    let result = super.call("a", "a():(address)", []);

    return result[0].toAddress();
  }

  try_a(): ethereum.CallResult<Address> {
    let result = super.tryCall("a", "a():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cumulativeRates(_collateralType: Address): BigInt {
    let result = super.call(
      "cumulativeRates",
      "cumulativeRates(address):(uint256)",
      [ethereum.Value.fromAddress(_collateralType)]
    );

    return result[0].toBigInt();
  }

  try_cumulativeRates(_collateralType: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cumulativeRates",
      "cumulativeRates(address):(uint256)",
      [ethereum.Value.fromAddress(_collateralType)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  debtNotifier(): Address {
    let result = super.call("debtNotifier", "debtNotifier():(address)", []);

    return result[0].toAddress();
  }

  try_debtNotifier(): ethereum.CallResult<Address> {
    let result = super.tryCall("debtNotifier", "debtNotifier():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  state(): Address {
    let result = super.call("state", "state():(address)", []);

    return result[0].toAddress();
  }

  try_state(): ethereum.CallResult<Address> {
    let result = super.tryCall("state", "state():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _addresses(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _IWETH(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _vaultsCoreState(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptUpgradeCall extends ethereum.Call {
  get inputs(): AcceptUpgradeCall__Inputs {
    return new AcceptUpgradeCall__Inputs(this);
  }

  get outputs(): AcceptUpgradeCall__Outputs {
    return new AcceptUpgradeCall__Outputs(this);
  }
}

export class AcceptUpgradeCall__Inputs {
  _call: AcceptUpgradeCall;

  constructor(call: AcceptUpgradeCall) {
    this._call = call;
  }

  get _oldVaultsCore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AcceptUpgradeCall__Outputs {
  _call: AcceptUpgradeCall;

  constructor(call: AcceptUpgradeCall) {
    this._call = call;
  }
}

export class BorrowCall extends ethereum.Call {
  get inputs(): BorrowCall__Inputs {
    return new BorrowCall__Inputs(this);
  }

  get outputs(): BorrowCall__Outputs {
    return new BorrowCall__Outputs(this);
  }
}

export class BorrowCall__Inputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BorrowCall__Outputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _collateralType(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositAndBorrowCall extends ethereum.Call {
  get inputs(): DepositAndBorrowCall__Inputs {
    return new DepositAndBorrowCall__Inputs(this);
  }

  get outputs(): DepositAndBorrowCall__Outputs {
    return new DepositAndBorrowCall__Outputs(this);
  }
}

export class DepositAndBorrowCall__Inputs {
  _call: DepositAndBorrowCall;

  constructor(call: DepositAndBorrowCall) {
    this._call = call;
  }

  get _collateralType(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _depositAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _borrowAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositAndBorrowCall__Outputs {
  _call: DepositAndBorrowCall;

  constructor(call: DepositAndBorrowCall) {
    this._call = call;
  }
}

export class DepositByVaultIdCall extends ethereum.Call {
  get inputs(): DepositByVaultIdCall__Inputs {
    return new DepositByVaultIdCall__Inputs(this);
  }

  get outputs(): DepositByVaultIdCall__Outputs {
    return new DepositByVaultIdCall__Outputs(this);
  }
}

export class DepositByVaultIdCall__Inputs {
  _call: DepositByVaultIdCall;

  constructor(call: DepositByVaultIdCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositByVaultIdCall__Outputs {
  _call: DepositByVaultIdCall;

  constructor(call: DepositByVaultIdCall) {
    this._call = call;
  }
}

export class DepositETHCall extends ethereum.Call {
  get inputs(): DepositETHCall__Inputs {
    return new DepositETHCall__Inputs(this);
  }

  get outputs(): DepositETHCall__Outputs {
    return new DepositETHCall__Outputs(this);
  }
}

export class DepositETHCall__Inputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }
}

export class DepositETHCall__Outputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }
}

export class DepositETHAndBorrowCall extends ethereum.Call {
  get inputs(): DepositETHAndBorrowCall__Inputs {
    return new DepositETHAndBorrowCall__Inputs(this);
  }

  get outputs(): DepositETHAndBorrowCall__Outputs {
    return new DepositETHAndBorrowCall__Outputs(this);
  }
}

export class DepositETHAndBorrowCall__Inputs {
  _call: DepositETHAndBorrowCall;

  constructor(call: DepositETHAndBorrowCall) {
    this._call = call;
  }

  get _borrowAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositETHAndBorrowCall__Outputs {
  _call: DepositETHAndBorrowCall;

  constructor(call: DepositETHAndBorrowCall) {
    this._call = call;
  }
}

export class DepositETHByVaultIdCall extends ethereum.Call {
  get inputs(): DepositETHByVaultIdCall__Inputs {
    return new DepositETHByVaultIdCall__Inputs(this);
  }

  get outputs(): DepositETHByVaultIdCall__Outputs {
    return new DepositETHByVaultIdCall__Outputs(this);
  }
}

export class DepositETHByVaultIdCall__Inputs {
  _call: DepositETHByVaultIdCall;

  constructor(call: DepositETHByVaultIdCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositETHByVaultIdCall__Outputs {
  _call: DepositETHByVaultIdCall;

  constructor(call: DepositETHByVaultIdCall) {
    this._call = call;
  }
}

export class LiquidateCall extends ethereum.Call {
  get inputs(): LiquidateCall__Inputs {
    return new LiquidateCall__Inputs(this);
  }

  get outputs(): LiquidateCall__Outputs {
    return new LiquidateCall__Outputs(this);
  }
}

export class LiquidateCall__Inputs {
  _call: LiquidateCall;

  constructor(call: LiquidateCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LiquidateCall__Outputs {
  _call: LiquidateCall;

  constructor(call: LiquidateCall) {
    this._call = call;
  }
}

export class LiquidatePartialCall extends ethereum.Call {
  get inputs(): LiquidatePartialCall__Inputs {
    return new LiquidatePartialCall__Inputs(this);
  }

  get outputs(): LiquidatePartialCall__Outputs {
    return new LiquidatePartialCall__Outputs(this);
  }
}

export class LiquidatePartialCall__Inputs {
  _call: LiquidatePartialCall;

  constructor(call: LiquidatePartialCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LiquidatePartialCall__Outputs {
  _call: LiquidatePartialCall;

  constructor(call: LiquidatePartialCall) {
    this._call = call;
  }
}

export class RepayCall extends ethereum.Call {
  get inputs(): RepayCall__Inputs {
    return new RepayCall__Inputs(this);
  }

  get outputs(): RepayCall__Outputs {
    return new RepayCall__Outputs(this);
  }
}

export class RepayCall__Inputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RepayCall__Outputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }
}

export class RepayAllCall extends ethereum.Call {
  get inputs(): RepayAllCall__Inputs {
    return new RepayAllCall__Inputs(this);
  }

  get outputs(): RepayAllCall__Outputs {
    return new RepayAllCall__Outputs(this);
  }
}

export class RepayAllCall__Inputs {
  _call: RepayAllCall;

  constructor(call: RepayAllCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RepayAllCall__Outputs {
  _call: RepayAllCall;

  constructor(call: RepayAllCall) {
    this._call = call;
  }
}

export class SetDebtNotifierCall extends ethereum.Call {
  get inputs(): SetDebtNotifierCall__Inputs {
    return new SetDebtNotifierCall__Inputs(this);
  }

  get outputs(): SetDebtNotifierCall__Outputs {
    return new SetDebtNotifierCall__Outputs(this);
  }
}

export class SetDebtNotifierCall__Inputs {
  _call: SetDebtNotifierCall;

  constructor(call: SetDebtNotifierCall) {
    this._call = call;
  }

  get _debtNotifier(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDebtNotifierCall__Outputs {
  _call: SetDebtNotifierCall;

  constructor(call: SetDebtNotifierCall) {
    this._call = call;
  }
}

export class UpgradeCall extends ethereum.Call {
  get inputs(): UpgradeCall__Inputs {
    return new UpgradeCall__Inputs(this);
  }

  get outputs(): UpgradeCall__Outputs {
    return new UpgradeCall__Outputs(this);
  }
}

export class UpgradeCall__Inputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }

  get _newVaultsCore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeCall__Outputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawETHCall extends ethereum.Call {
  get inputs(): WithdrawETHCall__Inputs {
    return new WithdrawETHCall__Inputs(this);
  }

  get outputs(): WithdrawETHCall__Outputs {
    return new WithdrawETHCall__Outputs(this);
  }
}

export class WithdrawETHCall__Inputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }

  get _vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawETHCall__Outputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }
}
