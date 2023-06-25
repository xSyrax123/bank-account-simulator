import BankAccount from "./bank_account.js";
import { updateBalances } from "./main.js";

export default class SavingsAccount extends BankAccount {
  constructor(balance, interestRate = 0.6, investment = 0) {
    super(balance);
    this.interestRate = interestRate;
    this.investment = investment;
  }

  depositAccount() {
    this.investment = parseFloat(prompt("Introduzca el monto de la inversión"));
    this.balance = this.investment;
    updateBalances();
  }
}
