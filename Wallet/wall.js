class Wallet {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
  }
}

const wallet = new Wallet(10);
console.log(wallet.getBalance()); // 100
wallet.deposit(50);
console.log(wallet.getBalance()); // 150
wallet.withdraw(200); // Insufficient funds
console.log(wallet.getBalance()); // 150

