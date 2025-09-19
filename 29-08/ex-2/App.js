const MeuArray = require('./MeuArray')


const empresa2 = new MeuArray

empresa2.adicionar("João")
empresa2.adicionar("Pedro")
empresa2.adicionar("Leticia")
empresa2.adicionar("Andre")

console.log(empresa2.obterElemento(2))

empresa2.limpar()

console.log(empresa2.itens)

console.log(empresa2.obterElemento(2))

