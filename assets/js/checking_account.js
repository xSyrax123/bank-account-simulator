import BankAccount from "./bank_account.js";

export default class CheckingAccount extends BankAccount {
  constructor(balance) {
    super(balance);
  }
}
