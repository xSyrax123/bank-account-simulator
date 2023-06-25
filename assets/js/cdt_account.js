import BankAccount from "./bank_account.js";
import checkingAccount from "./main.js";
import { updateBalances } from "./main.js";

export default class CdtAccount extends BankAccount {
  constructor(balance, investment = 0, interest = 0) {
    super(balance);
    this.investment = investment;
    this.interest = interest;
  }

  open() {
    this.investment = parseFloat(prompt("Introduzca el monto de la inversión"));
    this.interest = parseFloat(
      prompt("Introduzca el interés mensual en porcentaje")
    );

    this.balance = this.investment;
    this.interestRate = this.interest;
    updateBalances();
  }

  close() {
    checkingAccount.deposit(this.balance);
    this.balance = 0;
    this.interestRate = 0;
    updateBalances();
  }
}
