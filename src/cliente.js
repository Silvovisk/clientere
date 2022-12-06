export class Cliente {
    static count = 0;
    static listaClientes = [];
    id;
    constructor(nome, tel, bairro){ 
        if (!nome || !tel || !bairro){ 
            throw new Error("Dados inválidos"); 
        } else {
            this.nome = nome;
            this.tel = tel;
            this.bairro = bairro; 

            this.id = ++Cliente.count;

            //push
            this.#addClienteLista(this); 
        }
    }

    #addClienteLista(novoCliente){
        Cliente.listaClientes.push(novoCliente);
    }
}

