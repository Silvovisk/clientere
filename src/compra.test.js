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
        console.log("Cliente ", Cliente.listaClientes);
        console.log("Produtos  ", Produto.listaProdutos);
        // fazer testes separado de criações de compras
        const compra1 = new Compra(1,[{cod:'1122', qtd:2},{cod:'5512', qtd:1}]);
        const compra2 = new Compra(2,[{cod:'1313', qtd:2}]);
        const compra3 = new Compra(3,[{cod:'1313', qtd:1},{cod:'2112', qtd:1}]);
        // console.log(compra1, "COMPRA1111");
        expect(compra1).toBeInstanceOf(Compra);

        console.log("FINFIA é HEXA", Compra.listaTotalCompras);
        console.log(JSON.stringify(Compra.listaTotalCompras[0].listaCompra));
        
    });

    test('Cliente não existe', () => {
        expect(() => new Compra(10, [])).toThrow('Cliente inexistente');
    });

    test('Produto não existe', () => {
        expect(() => new Compra(1,[{cod:'1122', qtd:2},{cod:'0000', qtd:1}])).toThrow('Código de produto inexistente');
    });

    // tem cliente cadastrado? 
    //tem algum produto na compra? 


});