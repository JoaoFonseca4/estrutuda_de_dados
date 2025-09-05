class MeuArray {
    #itens = []
    #tamanho = 0

    //Adiciona um elemento ao final do Array
    adicionar(elemento){
        //Insere o elemento na posição atual do tamanho
        this.itens[this.tamanho] = elemento;

        //Incrementa o tamanho 
        this.tamnho++
    }
    remover(){}
    obterElemento(indice){}
    tamanhoArray(){}
    limpar(){}
    editar(indice, novoValor){}
    obterIndice(valor){}
}

module.exports = MeuArray;