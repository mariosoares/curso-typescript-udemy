
class Conta{
  //Private: Ele nao pode ser acessado ou modificado fora da classe
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private limite: number = 450;

  private aumentarLimit(quantidade: number){
    if(quantidade < 1000){
      this.limite = quantidade;
      console.log(`Agora seu limite é: ${this.limite}`);
    }else{
      console.log(`Infelizmente seu limite foi reprovado`);
    }
  }

  protected solicitarLimite(quantidade: number){
    return this.aumentarLimit(quantidade);
  }

  solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean{

    if(estaAutenticado){
      this.aumentarLimit(quantidade);
    }else{
      return false
    }

  }

}


class BancoAfiliado extends Conta{

  limiteAfiliado(){
    return this.solicitarLimite(950)
  }

}

const fulano = new Conta();

fulano.solicitarLimiteApp(true, 700)

console.log("=================")

console.log(fulano); console.log();

const joao = new BancoAfiliado();

console.log(joao);

joao.limiteAfiliado();

console.log(joao);