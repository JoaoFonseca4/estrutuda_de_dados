class PilhaMago {
    #itens = []
    #tamanho = 0

    adicionar(elemento){
        this.#itens[this.#tamanho] = elemento
        this.#tamanho++;
    }

    remover(){
        if (this.#itens === 0){
            return undefined
        }

       const UltimoItem = this.#itens[this.#tamanho - 1]

       delete this.#itens[this.#tamanho - 1]

       this.#tamanho--;

       return UltimoItem;

    }

    topo(){
        if (this.#itens === 0){
            return undefined;
        }
       return this.#itens[this.#tamanho - 1];
    }

    estaVazia = () => this.#tamanho === 0;

}

module.exports = PilhaMago;