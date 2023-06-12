

/*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */


type Status = "ABERTO" | "FECHADO";

class Loja {
    //Atributos da nossa classe.
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    // os métodos são declarados desta maneira:
    criarLoja(): void {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string { //pedidos --> array de strings

        // pedidos é uma array, tem o método map
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        })

        return `Pedido na mesa: ${mesa}`;
    }

    mudarStatus(status: Status): void {

        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        } else {
            console.log("LOJA FECAHDA!");
        }

    }

}

const redBurguer = new Loja("Red Burguer", "lanches");

 console.log(redBurguer.nome);

redBurguer.criarLoja(); console.log();

const retornoPedido = redBurguer.emitirPedido(48, "Suco Gelado", "Hamburguer duplo", "Coca 2L"); console.log();

console.log(retornoPedido); console.log();

redBurguer.mudarStatus("FECHADO")


