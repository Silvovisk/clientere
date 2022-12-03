import{Produto} from "./produto.js"

describe('Modulo do Produto', () => {
    test('Instância do produto', () => {
        expect(new Produto()).toBeInstanceOf(Produto);
    });

    test('Criou o Produto com código, descrição, pontos', () => {
        const produtoA = new Produto("1313", "Sérum", 13);
        expect(produtoA.cod).toBe("1313");
        expect(produtoA.descr).not.toBe("Serum");
        expect(produtoA.descr).toBe("Sérum");
        expect(produtoA.pontos).toBe(13);
    });

});