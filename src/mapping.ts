import { Opened, Deposited, Withdrawn, Borrowed, Repaid } from '../generated/VaultsCore/VaultsCore'
import { Vault  } from '../generated/schema'
import { VaultsDataProvider } from '../generated/VaultsCore/VaultsDataProvider'
import { BigInt, Address } from "@graphprotocol/graph-ts";

let ZERO = BigInt.fromI32(0);
let VAULT_DATA_PROVIDER = "0x9C29d8D359255e524702c7A9c95C6e6ae38274Dc";

export function handleDeposit(event: Deposited): void {
  let vault = getOrCreateVault(event.params.vaultId.toString(), event.params.sender);
  vault.supplied = vault.supplied.plus(event.params.amount);
  vault.save();
}

export function handleWithdraw(event: Withdrawn): void {
  let vault = getOrCreateVault(event.params.vaultId.toString(), event.params.sender);
  vault.supplied = vault.supplied.minus(event.params.amount);
  vault.save();
}

export function handleBorrow(event: Borrowed): void {
  let vault = getOrCreateVault(event.params.vaultId.toString(), event.params.sender);
  vault.borrowed = vault.borrowed.plus(event.params.amount);
  vault.save();
}

export function handleRepaid(event: Repaid): void {
  let vault = getOrCreateVault(event.params.vaultId.toString(), event.params.sender);
  vault.borrowed = vault.borrowed.minus(event.params.amount);
  vault.save();
}

const getOrCreateVault = (vaultId: string, owner: Address ): Vault => {
  let vault = Vault.load(vaultId);
  let vaultData = VaultsDataProvider.bind(Address.fromString(VAULT_DATA_PROVIDER));

  if (vault == null) {
    vault = new Vault(vaultId);
    vault.owner = null;
    vault.collateralType = null;
    vault.borrowed = ZERO;
    vault.supplied = ZERO;
  }
  
  let collateralType = vaultData.try_vaultCollateralType(BigInt.fromString(vaultId));
  vault.owner = owner;
  vault.collateralType = !collateralType.reverted ? collateralType.value : vault.collateralType;
  vault.borrowed = vault.borrowed;
  vault.supplied = vault.supplied;

  return vault as Vault;
}