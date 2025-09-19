const ContaBancaria = require('./ContaBancaria')

const conta1 = new ContaBancaria


conta1.depositar(100);
conta1.sacar(5)
conta1.verSaldo();
conta1.depositar(15)
conta1.sacar(30)
conta1.verSaldo()