import{Cliente} from "./cliente.js"

describe('Modulo do Cliente', () => {

    test('Não deve criar a instância do Cliente se não passar os parâmetros', () => {
        expect(() => new Cliente()).toThrow("Dados inválidos");
    });

    test('Criou o Cliente com o nome, telefone e bairro', () => {
        const cliente1 = new Cliente("Cintia", "11999990000", "Centro");
        expect(cliente1).toBeInstanceOf(Cliente);
        expect(cliente1.nome).toBe("Cintia");
        expect(cliente1.tel).toBe("11999990000");
        expect(cliente1.bairro).toBe("Centro");
    });

    test('Verificando o ID dos clientes', () => {
        const cliente1 = new Cliente("Cintia", "11999990000", "Centro");
        const cliente2 = new Cliente("Renata", "11999991111", "Itaquera");
        expect(cliente1.id).toBe(2);
        expect(cliente2.id).toBe(3);
        expect(Cliente.listaClientes.length).toBe(3);
        console.log(Cliente);
    });

});


