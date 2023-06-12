

/*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */
export { }

class Loja {
    //Atributos da nossa classe.
    nome: string;
    categoria: string;

    //os parâmetros do método construtor não são a mesma coisa que os atributos acima
    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

}

const redBurguer = new Loja("Red Burger", "lanches");

const sucos = new Loja("Sucao Gelado", "sucos");

//  console.log(redBurguer.nome)
console.log(redBurguer);
console.log(redBurguer.categoria); console.log();

console.log(sucos);
console.log(sucos.nome);