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




const empresa2 = new MeuArray

empresa2.adicionar("João")
empresa2.adicionar("Pedro")
empresa2.adicionar("Leticia")
empresa2.adicionar("Andre")

console.log(empresa2.obterElemento(2))

empresa2.limpar()

console.log(empresa2.itens)

console.log(empresa2.obterElemento(2))









