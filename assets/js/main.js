import SavingsAccount from "./savings_account.js";
import CheckingAccount from "./checking_account.js";
import CdtAccount from "./cdt_account.js";

const savingsAccount = new SavingsAccount();
const checkingAccount = new CheckingAccount();
const cdtAccount = new CdtAccount();

const SAVINGS_DEPOSIT_BTN = document.getElementById("deposit-savings");
const SAVINGS_WITHDRAW_BTN = document.getElementById("withdraw-savings");
const CHECKING_DEPOSIT_BTN = document.getElementById("deposit-checking");
const CHECKING_WITHDRAW_BTN = document.getElementById("withdraw-checking");
const CDT_DEPOSIT_BTN = document.getElementById("deposit-cdt");
const CDT_WITHDRAW_BTN = document.getElementById("withdraw-cdt");
const BALANCE_SAVINGS = document.getElementById("balance-savings");
const BALANCE_CHECKING = document.getElementById("balance-checking");
const BALANCE_CDT = document.getElementById("balance-cdt");
const BALANCE_TOTAL = document.getElementById("balance-total");
const MONTH_INPUT = document.getElementById("month");

export function updateBalances() {
  BALANCE_SAVINGS.value = `$${savingsAccount.balance.toFixed(2)} [${savingsAccount.interestRate}%]`;
  BALANCE_CHECKING.value = `$${checkingAccount.balance.toFixed(2)}`;
  BALANCE_CDT.value = `$${cdtAccount.balance.toFixed(2)} [${cdtAccount.interestRate}%]`;

  const totalBalance = savingsAccount.balance + checkingAccount.balance + cdtAccount.balance;
  BALANCE_TOTAL.value = `$${totalBalance.toFixed(2)}`;
}

export default checkingAccount;

document.addEventListener("click", (event) => {
  const TARGET = event.target;

  if (TARGET === SAVINGS_DEPOSIT_BTN) {
    savingsAccount.depositAccount();
  } else if (TARGET === SAVINGS_WITHDRAW_BTN) {
    const AMOUNT = parseFloat(prompt("Introduzca el monto a retirar"));
    savingsAccount.withdraw(AMOUNT);
  } else if (TARGET === CHECKING_DEPOSIT_BTN) {
    const AMOUNT = parseFloat(prompt("Introduzca el monto de la inversión"));
    checkingAccount.deposit(AMOUNT);
  } else if (TARGET === CHECKING_WITHDRAW_BTN) {
    const AMOUNT = parseFloat(prompt("Introduzca el monto a retirar"));
    checkingAccount.withdraw(AMOUNT);
  } else if (TARGET === CDT_DEPOSIT_BTN) {
    cdtAccount.open();
  } else if (TARGET === CDT_WITHDRAW_BTN) {
    cdtAccount.close();
  }
});

MONTH_INPUT.addEventListener("change", () => {
  savingsAccount.calculateInterest();
  cdtAccount.calculateInterest();
  updateBalances();
});
