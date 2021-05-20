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

export class VaultsDataProvider__vaultsResultValue0Struct extends ethereum.Tuple {
  get collateralType(): Address {
    return this[0].toAddress();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get collateralBalance(): BigInt {
    return this[2].toBigInt();
  }

  get baseDebt(): BigInt {
    return this[3].toBigInt();
  }

  get createdAt(): BigInt {
    return this[4].toBigInt();
  }
}

export class VaultsDataProvider extends ethereum.SmartContract {
  static bind(address: Address): VaultsDataProvider {
    return new VaultsDataProvider("VaultsDataProvider", address);
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

  baseDebt(param0: Address): BigInt {
    let result = super.call("baseDebt", "baseDebt(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_baseDebt(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("baseDebt", "baseDebt(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collateralDebt(_collateralType: Address): BigInt {
    let result = super.call(
      "collateralDebt",
      "collateralDebt(address):(uint256)",
      [ethereum.Value.fromAddress(_collateralType)]
    );

    return result[0].toBigInt();
  }

  try_collateralDebt(_collateralType: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "collateralDebt",
      "collateralDebt(address):(uint256)",
      [ethereum.Value.fromAddress(_collateralType)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createVault(_collateralType: Address, _owner: Address): BigInt {
    let result = super.call(
      "createVault",
      "createVault(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_collateralType),
        ethereum.Value.fromAddress(_owner)
      ]
    );

    return result[0].toBigInt();
  }

  try_createVault(
    _collateralType: Address,
    _owner: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createVault",
      "createVault(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_collateralType),
        ethereum.Value.fromAddress(_owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  debt(): BigInt {
    let result = super.call("debt", "debt():(uint256)", []);

    return result[0].toBigInt();
  }

  try_debt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("debt", "debt():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vaultBaseDebt(_id: BigInt): BigInt {
    let result = super.call(
      "vaultBaseDebt",
      "vaultBaseDebt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return result[0].toBigInt();
  }

  try_vaultBaseDebt(_id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "vaultBaseDebt",
      "vaultBaseDebt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vaultCollateralBalance(_id: BigInt): BigInt {
    let result = super.call(
      "vaultCollateralBalance",
      "vaultCollateralBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return result[0].toBigInt();
  }

  try_vaultCollateralBalance(_id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "vaultCollateralBalance",
      "vaultCollateralBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vaultCollateralType(_id: BigInt): Address {
    let result = super.call(
      "vaultCollateralType",
      "vaultCollateralType(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return result[0].toAddress();
  }

  try_vaultCollateralType(_id: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "vaultCollateralType",
      "vaultCollateralType(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaultCount(): BigInt {
    let result = super.call("vaultCount", "vaultCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_vaultCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("vaultCount", "vaultCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vaultDebt(_vaultId: BigInt): BigInt {
    let result = super.call("vaultDebt", "vaultDebt(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_vaultId)
    ]);

    return result[0].toBigInt();
  }

  try_vaultDebt(_vaultId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("vaultDebt", "vaultDebt(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_vaultId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vaultExists(_id: BigInt): boolean {
    let result = super.call("vaultExists", "vaultExists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toBoolean();
  }

  try_vaultExists(_id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("vaultExists", "vaultExists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  vaultId(_collateralType: Address, _owner: Address): BigInt {
    let result = super.call("vaultId", "vaultId(address,address):(uint256)", [
      ethereum.Value.fromAddress(_collateralType),
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_vaultId(
    _collateralType: Address,
    _owner: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "vaultId",
      "vaultId(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_collateralType),
        ethereum.Value.fromAddress(_owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vaultOwner(_id: BigInt): Address {
    let result = super.call("vaultOwner", "vaultOwner(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toAddress();
  }

  try_vaultOwner(_id: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("vaultOwner", "vaultOwner(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaults(_id: BigInt): VaultsDataProvider__vaultsResultValue0Struct {
    let result = super.call(
      "vaults",
      "vaults(uint256):((address,address,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return result[0].toTuple() as VaultsDataProvider__vaultsResultValue0Struct;
  }

  try_vaults(
    _id: BigInt
  ): ethereum.CallResult<VaultsDataProvider__vaultsResultValue0Struct> {
    let result = super.tryCall(
      "vaults",
      "vaults(uint256):((address,address,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as VaultsDataProvider__vaultsResultValue0Struct
    );
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _collateralType(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetBaseDebtCall extends ethereum.Call {
  get inputs(): SetBaseDebtCall__Inputs {
    return new SetBaseDebtCall__Inputs(this);
  }

  get outputs(): SetBaseDebtCall__Outputs {
    return new SetBaseDebtCall__Outputs(this);
  }
}

export class SetBaseDebtCall__Inputs {
  _call: SetBaseDebtCall;

  constructor(call: SetBaseDebtCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newBaseDebt(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetBaseDebtCall__Outputs {
  _call: SetBaseDebtCall;

  constructor(call: SetBaseDebtCall) {
    this._call = call;
  }
}

export class SetCollateralBalanceCall extends ethereum.Call {
  get inputs(): SetCollateralBalanceCall__Inputs {
    return new SetCollateralBalanceCall__Inputs(this);
  }

  get outputs(): SetCollateralBalanceCall__Outputs {
    return new SetCollateralBalanceCall__Outputs(this);
  }
}

export class SetCollateralBalanceCall__Inputs {
  _call: SetCollateralBalanceCall;

  constructor(call: SetCollateralBalanceCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _balance(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCollateralBalanceCall__Outputs {
  _call: SetCollateralBalanceCall;

  constructor(call: SetCollateralBalanceCall) {
    this._call = call;
  }
}
