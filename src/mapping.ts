import { BigInt } from "@graphprotocol/graph-ts"
import {
  deth,
  Approval,
  Issued,
  LogNote,
  LogSetAuthority,
  LogSetOwner,
  Redeemed,
  SettingsChanged,
  Transfer
} from "../generated/deth/deth"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.authority(...)
  // - contract.automationFeePerc(...)
  // - contract.balanceOf(...)
  // - contract.cache(...)
  // - contract.calculateIssuanceAmount(...)
  // - contract.calculateRedemptionValue(...)
  // - contract.cdpId(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.ethGemJoin(...)
  // - contract.getCollateral(...)
  // - contract.getCollateralPriceRAY(...)
  // - contract.getExcessCollateral(...)
  // - contract.getRatio(...)
  // - contract.gulper(...)
  // - contract.increaseAllowance(...)
  // - contract.makerManager(...)
  // - contract.minRedemptionRatio(...)
  // - contract.name(...)
  // - contract.oracle(...)
  // - contract.owner(...)
  // - contract.riskLimit(...)
  // - contract.saverProxy(...)
  // - contract.saverProxyActions(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
}

export function handleIssued(event: Issued): void {}

export function handleLogNote(event: LogNote): void {}

export function handleLogSetAuthority(event: LogSetAuthority): void {}

export function handleLogSetOwner(event: LogSetOwner): void {}

export function handleRedeemed(event: Redeemed): void {}

export function handleSettingsChanged(event: SettingsChanged): void {}

export function handleTransfer(event: Transfer): void {}
