
// Herança > quando nós temos uma classe que herda de outra classe
// ClassePAI tem seus atributos e a classe FILHA vai herdar todos atributos do pai alem dos seus proprios atributos
export {}

class Usuario{
  nome: string;
  email: string;

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }

}

// A classe Admin vai herdar tudo o que a classe Usuario tem
class Admin extends Usuario{
  cargo: string;
  nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number){
    // Chamando o construtor da classe pai. Obrigatório
    super(nome, email);
    
    this.cargo = cargo;
    this.nivel = nivel;
  }

}

const usuario1 = new Admin("Matheus", "matheus@teste.com", "Programador", 2);

console.log(usuario1);

console.log(usuario1.nome)