export class Produto {

    static listaProdutos = [];

    constructor(cod, descr, pontos){
        this.cod = cod;
        this.descr = descr;
        this.pontos = pontos;

        //push
        this.#addProdutoLista(this);
    }

    #addProdutoLista(novoProduto){
        Produto.listaProdutos.push(novoProduto);
    }
}