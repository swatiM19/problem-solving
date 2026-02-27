var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BankAccountSecure = /** @class */ (function () {
    function BankAccountSecure(accountNumber, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactionHistory = [];
    }
    BankAccountSecure.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccountSecure.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    BankAccountSecure.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("amount must be positive");
        }
        this.balance += amount;
        this.transactionHistory.push("Deposited: ".concat(amount));
    };
    BankAccountSecure.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            throw new Error("amount must be positive");
        }
        if (amount > this.balance) {
            console.log('Insufficient balance');
            return false;
        }
        this.balance -= amount;
        this.transactionHistory.push("Withdraw: ".concat(amount));
        return true;
    };
    BankAccountSecure.prototype.getTransactionHistory = function () {
        return __spreadArray([], this.transactionHistory, true);
    };
    return BankAccountSecure;
}());
var myAccount = new BankAccountSecure('ACC001', 10000);
myAccount.deposit(5000);
console.log(myAccount.getBalance());
myAccount.withdraw(1000);
console.log(myAccount.getBalance());
