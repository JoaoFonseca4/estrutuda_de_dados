const PilhaMago = require('./PilhaMago')

const mago1 = new PilhaMago

mago1.adicionar('feitiço 1');
mago1.adicionar('feitiço 2');
mago1.adicionar('feitiço 3');
mago1.adicionar('feitiço 4');
mago1.adicionar('feitiço 5');

mago1.remover()
console.log(mago1.remover())

console.log(mago1.topo())

console.log(mago1.estaVazia())