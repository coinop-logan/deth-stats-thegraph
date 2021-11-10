import {
    Address,
    BigInt,
    ethereum,
    Entity,
    Value,
    store,
    ValueKind,
    BigDecimal
} from "@graphprotocol/graph-ts"
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

class DataPoint extends Entity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
    }

    save(): void {
        let id = this.get("id");
        assert(id !== null, "Cannot save DataPoint entity without an ID");
        assert(
            id.kind == ValueKind.STRING,
            "Cannot save DataPoint entity with non-string ID. " +
            'Considering using .toHex() to convert the "id" to a string.'
        );
        store.set("DataPoint", id.toString(), this);
    }

    static load(id: string): DataPoint | null {
        return store.get("DataPoint", id) as DataPoint | null;
    }

    get id(): string {
        let value = this.get("id");
        return value.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get ethRedeemablePerDeth(): BigInt {
        let value = this.get("ethRedeemablePerDeth");
        return value.toBigInt();
    }

    set ethRedeemablePerDeth(value: BigInt) {
        this.set("ethRedeemablePerDeth", Value.fromBigInt(value));
    }

    get dethRedeemablePerEth(): BigInt {
        let value = this.get("dethRedeemablePerEth");
        return value.toBigInt();
    }

    set dethRedeemablePerEth(value: BigInt) {
        this.set("dethRedeemablePerEth", Value.fromBigInt(value));
    }

    get timestamp(): BigInt {
        let value = this.get("timestamp");
        return value.toBigInt();
    }

    set timestamp(value: BigInt) {
        this.set("timestamp", Value.fromBigInt(value));
    }
}


export function handleBlock(block: ethereum.Block): void {
    let blocknum = block.number
    if (blocknum.mod(BigInt.fromI32(1000)).isZero()) {
        let dethContract = deth.bind(Address.fromString("0x51863Ec92BA14ede7B17fb2B053145C90E215A57"))
        
        let ethRedeemablePerDeth = dethContract.calculateRedemptionValue(BigInt.fromString("1000000000000000000")).value3
        let dethRedeemablePerEth = dethContract.calculateIssuanceAmount(BigInt.fromString("1000000000000000000")).value4
        
        let id = blocknum.toString()
        
        if (DataPoint.load(id) == null) {
            let dataPoint = new DataPoint(id)
            
            dataPoint.timestamp = block.timestamp
            dataPoint.ethRedeemablePerDeth = ethRedeemablePerDeth
            dataPoint.dethRedeemablePerEth = dethRedeemablePerEth
            
            dataPoint.save()
        }
    }
}