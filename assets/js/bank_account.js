import { updateBalances } from "./main.js";

export default class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    updateBalances();
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      updateBalances();
    } else {
      alert("No tiene saldo suficiente");
    }
  }

  calculateInterest() {
    const interest = this.investment * (this.interestRate / 100);
    this.balance += interest;
  }
}
