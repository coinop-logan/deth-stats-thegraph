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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Issued extends ethereum.Event {
  get params(): Issued__Params {
    return new Issued__Params(this);
  }
}

export class Issued__Params {
  _event: Issued;

  constructor(event: Issued) {
    this._event = event;
  }

  get _receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _suppliedCollateral(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _protocolFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _automationFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _actualCollateralAdded(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _accreditedCollateral(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _tokensIssued(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class LogNote extends ethereum.Event {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get foo(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get bar(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get wad(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fax(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class LogSetAuthority extends ethereum.Event {
  get params(): LogSetAuthority__Params {
    return new LogSetAuthority__Params(this);
  }
}

export class LogSetAuthority__Params {
  _event: LogSetAuthority;

  constructor(event: LogSetAuthority) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogSetOwner extends ethereum.Event {
  get params(): LogSetOwner__Params {
    return new LogSetOwner__Params(this);
  }
}

export class LogSetOwner__Params {
  _event: LogSetOwner;

  constructor(event: LogSetOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Redeemed extends ethereum.Event {
  get params(): Redeemed__Params {
    return new Redeemed__Params(this);
  }
}

export class Redeemed__Params {
  _event: Redeemed;

  constructor(event: Redeemed) {
    this._event = event;
  }

  get _redeemer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokensRedeemed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _protocolFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _automationFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _collateralRedeemed(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _collateralReturned(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class SettingsChanged extends ethereum.Event {
  get params(): SettingsChanged__Params {
    return new SettingsChanged__Params(this);
  }
}

export class SettingsChanged__Params {
  _event: SettingsChanged;

  constructor(event: SettingsChanged) {
    this._event = event;
  }

  get _minRedemptionRatio(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _automationFeePerc(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _riskLimit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class deth__calculateIssuanceAmountResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class deth__calculateRedemptionValueResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class deth__getCollateralResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class deth extends ethereum.SmartContract {
  static bind(address: Address): deth {
    return new deth("deth", address);
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authority(): Address {
    let result = super.call("authority", "authority():(address)", []);

    return result[0].toAddress();
  }

  try_authority(): ethereum.CallResult<Address> {
    let result = super.tryCall("authority", "authority():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  automationFeePerc(): BigInt {
    let result = super.call(
      "automationFeePerc",
      "automationFeePerc():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_automationFeePerc(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "automationFeePerc",
      "automationFeePerc():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cache(): Address {
    let result = super.call("cache", "cache():(address)", []);

    return result[0].toAddress();
  }

  try_cache(): ethereum.CallResult<Address> {
    let result = super.tryCall("cache", "cache():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calculateIssuanceAmount(
    _suppliedCollateral: BigInt
  ): deth__calculateIssuanceAmountResult {
    let result = super.call(
      "calculateIssuanceAmount",
      "calculateIssuanceAmount(uint256):(uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_suppliedCollateral)]
    );

    return new deth__calculateIssuanceAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_calculateIssuanceAmount(
    _suppliedCollateral: BigInt
  ): ethereum.CallResult<deth__calculateIssuanceAmountResult> {
    let result = super.tryCall(
      "calculateIssuanceAmount",
      "calculateIssuanceAmount(uint256):(uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_suppliedCollateral)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new deth__calculateIssuanceAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  calculateRedemptionValue(
    _tokensToRedeem: BigInt
  ): deth__calculateRedemptionValueResult {
    let result = super.call(
      "calculateRedemptionValue",
      "calculateRedemptionValue(uint256):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokensToRedeem)]
    );

    return new deth__calculateRedemptionValueResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_calculateRedemptionValue(
    _tokensToRedeem: BigInt
  ): ethereum.CallResult<deth__calculateRedemptionValueResult> {
    let result = super.tryCall(
      "calculateRedemptionValue",
      "calculateRedemptionValue(uint256):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokensToRedeem)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new deth__calculateRedemptionValueResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  cdpId(): BigInt {
    let result = super.call("cdpId", "cdpId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cdpId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cdpId", "cdpId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ethGemJoin(): Address {
    let result = super.call("ethGemJoin", "ethGemJoin():(address)", []);

    return result[0].toAddress();
  }

  try_ethGemJoin(): ethereum.CallResult<Address> {
    let result = super.tryCall("ethGemJoin", "ethGemJoin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCollateral(): deth__getCollateralResult {
    let result = super.call(
      "getCollateral",
      "getCollateral():(uint256,uint256,uint256,uint256,uint256)",
      []
    );

    return new deth__getCollateralResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getCollateral(): ethereum.CallResult<deth__getCollateralResult> {
    let result = super.tryCall(
      "getCollateral",
      "getCollateral():(uint256,uint256,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new deth__getCollateralResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getCollateralPriceRAY(): BigInt {
    let result = super.call(
      "getCollateralPriceRAY",
      "getCollateralPriceRAY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCollateralPriceRAY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCollateralPriceRAY",
      "getCollateralPriceRAY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getExcessCollateral(): BigInt {
    let result = super.call(
      "getExcessCollateral",
      "getExcessCollateral():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getExcessCollateral(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getExcessCollateral",
      "getExcessCollateral():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRatio(): BigInt {
    let result = super.call("getRatio", "getRatio():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getRatio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getRatio", "getRatio():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gulper(): Address {
    let result = super.call("gulper", "gulper():(address)", []);

    return result[0].toAddress();
  }

  try_gulper(): ethereum.CallResult<Address> {
    let result = super.tryCall("gulper", "gulper():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  makerManager(): Address {
    let result = super.call("makerManager", "makerManager():(address)", []);

    return result[0].toAddress();
  }

  try_makerManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("makerManager", "makerManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  minRedemptionRatio(): BigInt {
    let result = super.call(
      "minRedemptionRatio",
      "minRedemptionRatio():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minRedemptionRatio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minRedemptionRatio",
      "minRedemptionRatio():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  oracle(): Address {
    let result = super.call("oracle", "oracle():(address)", []);

    return result[0].toAddress();
  }

  try_oracle(): ethereum.CallResult<Address> {
    let result = super.tryCall("oracle", "oracle():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  riskLimit(): BigInt {
    let result = super.call("riskLimit", "riskLimit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_riskLimit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("riskLimit", "riskLimit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  saverProxy(): Address {
    let result = super.call("saverProxy", "saverProxy():(address)", []);

    return result[0].toAddress();
  }

  try_saverProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("saverProxy", "saverProxy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  saverProxyActions(): Address {
    let result = super.call(
      "saverProxyActions",
      "saverProxyActions():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_saverProxyActions(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "saverProxyActions",
      "saverProxyActions():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _gulper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _cdpId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _oracle(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _initialRecipient(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _automationAuthority(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ChangeGulperCall extends ethereum.Call {
  get inputs(): ChangeGulperCall__Inputs {
    return new ChangeGulperCall__Inputs(this);
  }

  get outputs(): ChangeGulperCall__Outputs {
    return new ChangeGulperCall__Outputs(this);
  }
}

export class ChangeGulperCall__Inputs {
  _call: ChangeGulperCall;

  constructor(call: ChangeGulperCall) {
    this._call = call;
  }

  get _newGulper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeGulperCall__Outputs {
  _call: ChangeGulperCall;

  constructor(call: ChangeGulperCall) {
    this._call = call;
  }
}

export class ChangeSettingsCall extends ethereum.Call {
  get inputs(): ChangeSettingsCall__Inputs {
    return new ChangeSettingsCall__Inputs(this);
  }

  get outputs(): ChangeSettingsCall__Outputs {
    return new ChangeSettingsCall__Outputs(this);
  }
}

export class ChangeSettingsCall__Inputs {
  _call: ChangeSettingsCall;

  constructor(call: ChangeSettingsCall) {
    this._call = call;
  }

  get _minRedemptionRatio(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _automationFeePerc(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _riskLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ChangeSettingsCall__Outputs {
  _call: ChangeSettingsCall;

  constructor(call: ChangeSettingsCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get _target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get response(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class Execute1Call extends ethereum.Call {
  get inputs(): Execute1Call__Inputs {
    return new Execute1Call__Inputs(this);
  }

  get outputs(): Execute1Call__Outputs {
    return new Execute1Call__Outputs(this);
  }
}

export class Execute1Call__Inputs {
  _call: Execute1Call;

  constructor(call: Execute1Call) {
    this._call = call;
  }

  get _code(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class Execute1Call__Outputs {
  _call: Execute1Call;

  constructor(call: Execute1Call) {
    this._call = call;
  }

  get target(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get response(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class GiveCDPToDSProxyCall extends ethereum.Call {
  get inputs(): GiveCDPToDSProxyCall__Inputs {
    return new GiveCDPToDSProxyCall__Inputs(this);
  }

  get outputs(): GiveCDPToDSProxyCall__Outputs {
    return new GiveCDPToDSProxyCall__Outputs(this);
  }
}

export class GiveCDPToDSProxyCall__Inputs {
  _call: GiveCDPToDSProxyCall;

  constructor(call: GiveCDPToDSProxyCall) {
    this._call = call;
  }

  get _dsProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GiveCDPToDSProxyCall__Outputs {
  _call: GiveCDPToDSProxyCall;

  constructor(call: GiveCDPToDSProxyCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get _receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokensToRedeem(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class SetAuthorityCall extends ethereum.Call {
  get inputs(): SetAuthorityCall__Inputs {
    return new SetAuthorityCall__Inputs(this);
  }

  get outputs(): SetAuthorityCall__Outputs {
    return new SetAuthorityCall__Outputs(this);
  }
}

export class SetAuthorityCall__Inputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }

  get authority_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuthorityCall__Outputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }
}

export class SetCacheCall extends ethereum.Call {
  get inputs(): SetCacheCall__Inputs {
    return new SetCacheCall__Inputs(this);
  }

  get outputs(): SetCacheCall__Outputs {
    return new SetCacheCall__Outputs(this);
  }
}

export class SetCacheCall__Inputs {
  _call: SetCacheCall;

  constructor(call: SetCacheCall) {
    this._call = call;
  }

  get _cacheAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCacheCall__Outputs {
  _call: SetCacheCall;

  constructor(call: SetCacheCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get owner_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class SquanderMyEthForWorthlessBeansAndAgreeToTermsCall extends ethereum.Call {
  get inputs(): SquanderMyEthForWorthlessBeansAndAgreeToTermsCall__Inputs {
    return new SquanderMyEthForWorthlessBeansAndAgreeToTermsCall__Inputs(this);
  }

  get outputs(): SquanderMyEthForWorthlessBeansAndAgreeToTermsCall__Outputs {
    return new SquanderMyEthForWorthlessBeansAndAgreeToTermsCall__Outputs(this);
  }
}

export class SquanderMyEthForWorthlessBeansAndAgreeToTermsCall__Inputs {
  _call: SquanderMyEthForWorthlessBeansAndAgreeToTermsCall;

  constructor(call: SquanderMyEthForWorthlessBeansAndAgreeToTermsCall) {
    this._call = call;
  }

  get _receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SquanderMyEthForWorthlessBeansAndAgreeToTermsCall__Outputs {
  _call: SquanderMyEthForWorthlessBeansAndAgreeToTermsCall;

  constructor(call: SquanderMyEthForWorthlessBeansAndAgreeToTermsCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
