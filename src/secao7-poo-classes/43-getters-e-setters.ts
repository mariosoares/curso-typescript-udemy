
// Caso de uso de um JOGO

class Jogo{
  private servidor: string;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private id: string = "1234";

  constructor(servidor: string){
    this.servidor = servidor;
  }

  //Metodo GET = Para pegar o valor ao inves de acessar diretamente a propriedade
  get getServidorIP(){ // o nome não precisa ter get...
    console.log("== METODO GET ==")
    return this.servidor;
  }

  //Metodo SET = Passar / alterar algum atributo.
  set setServidorIP(novoIp: string){
    if(this.servidor === novoIp){
      throw new Error("O novo IP deve ser diferente do IP antigo."); // lançando uma exceção
    }

    this.servidor = novoIp;
  }

}

const GTA5 = new Jogo("192.168.5.10");

GTA5.getServidorIP; console.log(); //pode ser chamando como um variável

console.log(GTA5.getServidorIP); console.log(); // colocado dentro de um console para obter o retorno 

//GTA5.setServidorIP = "192.168.5.10"; // Error: O novo IP deve ser diferente do IP antigo.

GTA5.setServidorIP = "192.250.155.9"; // pode agir como se fosse atribuição de uma variável

//GTA5.setServidorIP('192.168.155.90'); // erro -> não é assim que chama um método de uma classe

console.log(GTA5); console.log();

//  meu try inicialmente deu o erro seguinte --> (51,26): error TS18046: 'error' is of type 'unknown'.
//Solução: tsconfig.json -> "useUnknownInCatchVariables": false, 
try{
  GTA5.setServidorIP = "192.250.155.9";
}catch(error){
  console.log("ERROR: ", error.message);
}
console.log();

console.log(GTA5.getServidorIP);

try{
    GTA5.setServidorIP = "192.250.155.99";
  }catch(error){
    console.log("ERROR: ", error.message);
  }
  console.log();

  console.log(GTA5.getServidorIP);
