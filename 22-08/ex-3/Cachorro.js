const Animal = require('./Animal.js')

class Cachorro extends Animal {
    falar(){
        console.log(`au au`)
    }
}

module.exports = Cachorro;