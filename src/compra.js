import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Compra {
    static listaTotalCompras = []; 

    constructor(clienteId, listaPedido){ 
       const produtosExistem = listaPedido.map(item => {
            const itemExiste = Produto.listaProdutos.find(produto => produto.cod === item.cod);
            if ( !itemExiste ) { 
                throw new Error("Código de produto inexistente");
            } else {
                const produto = itemExiste;
                produto.qtd = item.qtd; 
                produto.subTotal = itemExiste.pontos * item.qtd;
                console.log(produto, "PRODUTO");
                return produto;
            }
       });

       const clienteExiste = Cliente.listaClientes.find(element => element.id === clienteId);
       if (!clienteExiste) {
            throw new Error("Cliente inexistente");
       } else { 
            this.cliente = clienteExiste;
            this.listaCompra = produtosExistem;

            //push
            this.#addCompra(this);
       }
    }

    #addCompra(novoCompra){
        Compra.listaTotalCompras.push(novoCompra);
    }
}