class carro{
     constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
     }
    velocidade;
    acelerar(){
        this.velocidade += 10
        console.log(`Velocidade atual é de ${this.velocidade}`)
    }
    frear(){
        this.velocidade -= 5
        console.log(`Velocidade atual é de ${this.velocidade}`)
    }

}

module.exports = carro;