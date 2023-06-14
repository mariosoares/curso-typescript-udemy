
type DadosConta = { // poderia ser uma interface
  nome: string;
  numero: string;
  endereco: string;
}

// não pode chamá-la, não pode ser instanciada diretamente, é um modelo para outras classes
abstract class ContaBanco{

  abstract abrirConta(dados: DadosConta): boolean; // método que não pode ter implementação, chaves

}

//const conta1 = new ContaBanco(); //Cannot create an instance of an abstract class.ts(2511)

class PessoaFisica extends ContaBanco{
  abrirConta(dados: DadosConta): boolean {

    console.log("=========");
    console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`)  ;
    console.log("=========");

    return true;
  }
}

class PessoaJuridica extends ContaBanco{
  abrirConta(dados: DadosConta): boolean {

    console.log("=========")
    console.log(`Nova conta P.Juridica criada com sucesso ${dados.nome}`)  
    console.log("=========")

    return true;
  }

}


const joana = new PessoaFisica();

joana.abrirConta({
  nome: "Joana Silva",
  numero: "1029-x",
  endereco: "Rua 15, bairro centro"
})
console.log();

const sujeitoprogramador = new PessoaJuridica();

sujeitoprogramador.abrirConta({
  nome: "Matheus Fraga",
  numero: "90201-x",
  endereco: "Avenida dez, centro"
})