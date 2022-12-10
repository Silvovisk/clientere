import { Cliente } from "./cliente.js";
import { Compra } from "./compra.js";
import { Produto } from "./produto.js";

describe('Modulo da Compra', () => {
    //antes de todos os testes vou exercutar isso
    beforeAll(() => {
        const cliente1 = new Cliente("Cintia", "11999990000", "Centro");
        const cliente2 = new Cliente("Renata", "11999991111", "Itaquera");
        const cliente3 = new Cliente("Soraia", "11999992222", "Penha");

        const produtoA = new Produto("1313", "Sérum", 13);
        const produtoB = new Produto("1122", "Shampoo", 9);
        const produtoC = new Produto("5512", "Condicionador", 9);
        const produtoD = new Produto("2112", "Sabonete", 2);
    });

    test('Instância da compra', () => {
        
        const usuario1 = 1;
        const lista1 = [{cod:'1122', qtd:2},{cod:'5512', qtd:1}]; 
        const compra1 = new Compra(usuario1, lista1);

        expect(compra1).toBeInstanceOf(Compra);

        expect(Compra.listaTotalCompras.length).toBe(1);
        
        expect(Compra.totalPontos).toBe(27);
    });

    test('Cliente não existe', () => {
        expect(() => new Compra(10, [])).toThrow('Cliente inexistente');
    });

    test('Produto não existe', () => {
        expect(() => new Compra(1,[{cod:'1122', qtd:2},{cod:'0000', qtd:1}])).toThrow('Código de produto inexistente');
    });

    test('Criando lista de compra com codigo do cliente e lista de pedidos', () => {
        const usuario2 = 2;
        const lista2 = [{cod:'1313', qtd:1}]; 
        const compra2 = new Compra(usuario2, lista2);

        const usuario3 = 3; 
        const lista3 = [{cod:'1313', qtd:1},{cod:'2112', qtd:1}]
        const compra3 = new Compra(usuario3, lista3);

        console.table(Compra.listaTotalCompras);

        console.log("Cliente 1 - Lista de produtos");
        console.table(Compra.listaTotalCompras[0].cliente);
        console.table( JSON.parse(JSON.stringify(Compra.listaTotalCompras[0].listaCompra)) );
        console.log("Cliente 2 - Lista de produtos");
        console.table(Compra.listaTotalCompras[1].cliente);
        console.table( JSON.parse(JSON.stringify(Compra.listaTotalCompras[1].listaCompra)) );
        console.log("Cliente 3 - Lista de produtos");
        console.table(Compra.listaTotalCompras[2].cliente);
        console.table( JSON.parse(JSON.stringify(Compra.listaTotalCompras[2].listaCompra)) );

        expect(Compra.listaTotalCompras.length).toBe(3);
    });

    test('Atingiu o minimo de 80 pontos para passar o pedido', () => {
        expect(Compra.totalPontos).toBe(80);
    });
});