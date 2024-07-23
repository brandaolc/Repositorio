class BankAccount{
    constructor(saldoInicial){
        this.saldo = saldoInicial
    }
    depositar(valor){
        this.saldo += valor;
        return `novo saldo: R$ ${this.saldo}`;
    }
    sacar(valor){
        if (valor > this.saldo){
            return `saldo insuficiente!`;

    }
    this.saldo -= valor;
    return `novo saldo: R$ ${this.saldo}`;
    }
}
const minhaConta = new BankAccount(1000);
console.log(minhaConta.depositar(500)); 
console.log(minhaConta.sacar(300)); 
console.log(minhaConta.sacar(1500));  
