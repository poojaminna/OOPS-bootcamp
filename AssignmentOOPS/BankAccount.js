function BankAccount(accountName, balance) {
  this.accountName = accountName;
  this.balance = balance;
  this.deposit = function (x) {
    this.balance = this.balance + x;
  };
}
BankAccount.prototype.withdraw = function (y) {
  console.log("not inside the over ridden function");
  this.balance = this.balance - y;
};

function CheckingAccount(lastCheckNum, accountName, balance) {
  BankAccount.call(this, accountName, balance);
  this.lastCheckNum = lastCheckNum;
}

function SavingsAccount(interestRate, accountName, balance) {
  BankAccount.call(this, accountName, balance);
  this.interestRate = interestRate;
}

function InvestmentAccount(accountRep, accountName, balance) {
  BankAccount.call(this, accountName, balance);
  this.accountRep = accountRep;
}
InvestmentAccount.prototype = Object.create(BankAccount.prototype);
//InvestmentAccount.prototype.constructor = InvestmentAccount;
Object.defineProperty(InvestmentAccount.prototype, "constructor", {
  enumerable: false,
  value: InvestmentAccount,
});
InvestmentAccount.prototype.withdraw = function () {
  console.log("inside over ridden function ");
  this.balance = this.balance - this.accountRep;
};
let a = new InvestmentAccount(35, "Pooja", 50);
a.deposit(100);
a.withdraw(10);
console.log(a);
