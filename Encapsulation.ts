class BankAccountSecure {
    private balance: number;
    private readonly accountNumber: string;
    private transactionHistory: string[];

    constructor(accountNumber:string, initialBalance: number=0){
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactionHistory = [];
    }

    public getBalance(): number {
        return this.balance;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public deposit(amount: number): void {
        if(amount <= 0){
            throw new Error("amount must be positive");
        }
        this.balance += amount;
        this.transactionHistory.push(`Deposited: ${amount}`);
    }

    public withdraw(amount: number): boolean {
        if(amount <= 0){
            throw new Error("amount must be positive");
        }

        if(amount > this.balance){
            console.log('Insufficient balance');
            return false;
        }
        this.balance -= amount;
        this.transactionHistory.push(`Withdraw: ${amount}`);
        return true;
    }

    public getTransactionHistory(): string[] {
        return [...this.transactionHistory];
    }
}

const myAccount = new BankAccountSecure('ACC001',10000);
myAccount.deposit(5000);
console.log(myAccount.getBalance());
myAccount.withdraw(1000);
console.log(myAccount.getBalance());
