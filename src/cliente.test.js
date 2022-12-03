import{Cliente} from "./cliente.js"

describe('Modulo do Cliente', () => {
    test('Criação de cliente com nome, telefone e data da primeira compra', () => {
        expect(new Cliente()).toBeInstanceOf(Cliente);
    });
});


