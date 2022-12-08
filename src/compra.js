import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Compra {
    static listaTotalCompras = []; 
    static totalPontos = 0;

    constructor(clienteId, listaPedido){ 
       const produtosExistem = listaPedido.map(item => {
            const itemExiste = Produto.listaProdutos.find(produto => produto.cod === item.cod);
            if ( !itemExiste ) { 
                throw new Error("Código de produto inexistente");
            } 
            const produto = itemExiste;
            produto.qtd = item.qtd; 
            produto.subTotal = itemExiste.pontos * item.qtd;
            return produto;
       });

       const clienteExiste = Cliente.listaClientes.find(element => element.id === clienteId);
       if (!clienteExiste) {
            throw new Error("Cliente inexistente");
       } 
        this.cliente = clienteExiste;
        this.listaCompra = produtosExistem;
        this.totalPontosPorCompra = produtosExistem.reduce( (acumulador, item) => acumulador + item.subTotal, 0 );

        //push
        this.#addCompra(this);
        this.#somaTotalPontos();

    }

    #addCompra(novoCompra){
        Compra.listaTotalCompras.push(novoCompra);
    }

    #somaTotalPontos(){
        Compra.totalPontos = Compra.listaTotalCompras.reduce( (acumulador, compra) => acumulador + compra.totalPontosPorCompra, 0)
    }
}