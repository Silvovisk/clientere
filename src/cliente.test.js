import{Cliente} from "./cliente.js"

describe('Modulo do Cliente', () => {
    test('Criação da instância do cliente', () => {
        expect(new Cliente()).toBeInstanceOf(Cliente);
    });

    test('Criou o Cliente com o nome, telefone e bairro', () => {
        const cliente1 = new Cliente("Cintia", "11999990000", "Centro");
        expect(cliente1.nome).toBe("Cintia");
        expect(cliente1.tel).toBe("11999990000");
        expect(cliente1.bairro).toBe("Centro");
    });
});


