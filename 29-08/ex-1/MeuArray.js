class MeuArray {
    constructor(){
        this.itens = [];

        this.tamanho = 0
    }

    adicionar(elemento){
        this.itens[this.tamanho] = elemento;
        this.tamanho++;
    }

    remover(){

        if(this.itens === 0){
            return undefined;
        }

        const UltimoItem = this.itens[this.tamanho - 1];

        delete this.itens[this.tamanho - 1];

        this.tamanho--;

        return UltimoItem;

    }

    obterElemento(indice){
        if (indice < 0 || indice >= this.tamanho){
            return undefined
        }

        return this.itens[indice];
    

    }
    tamanhoArray(){
        return this.tamanho
    }
    limpar(){
         this.itens = []

         this.tamanho = 0
    }

};

module.exports = MeuArray;