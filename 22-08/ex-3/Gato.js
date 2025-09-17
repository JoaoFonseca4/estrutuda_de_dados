const Animal = require('./Animal.js')

class Gato extends Animal {
    falar(){
        console.log('miau!')
    }
}

module.exports = Gato;