class ContaBancaria{
    #saldo = 0

    depositar(valor){
      this.#saldo += valor
    }
    sacar(valor){
       this.#saldo -= valor
    }
    verSaldo(){
        console.log(`Seu saldo é de R$${this.#saldo}`)
    }    
}

module.exports = ContaBancaria