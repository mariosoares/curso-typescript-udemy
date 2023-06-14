
// E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
// nao podemos alterar ele nem com métodos definidos na classe, não private, é readonly.

class Pessoa{
  readonly id: string = "123"; // por ex., id incremental gerado automaticamente por uma biblioteca, nem colooca no construtor
  nome: string;
  idade: number;

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }

  mostraId(){
    console.log(`ID DO USUARIO:`, this.id);
  }

}

const ana = new Pessoa("Ana Carol", 29);

console.log(ana);

console.log("ID DA ANA: ", ana.id); // ao contrário de private/protected pode ser acessado diretamente,
// só não pode ser alterado

// ana.id = '345'; //Cannot assign to 'id' because it is a read-only property.