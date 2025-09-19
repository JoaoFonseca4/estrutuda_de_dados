const MeuArray = require('./MeuArray')

const empresa = new MeuArray()

empresa.adicionar('Tirar o Lixo')
empresa.adicionar('Trocar o filtro')
empresa.adicionar('Cuidar das plantas')
empresa.adicionar('Fazer o café')
empresa.adicionar('Trancar as salas')

//console.table(empresa)

empresa.remover();


console.log(empresa.obterElemento(0));

console.log(empresa.itens)












