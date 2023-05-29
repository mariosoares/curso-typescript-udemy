// function login(username: string): void {
//     ...
// }

function login(username: string): boolean | string {
  // eslint-disable-next-line prefer-const
  let message = "Bem vindo " + username;
   
  console.log(message);

  return username;

}

const usernameLogin = login("matheus");

console.log(usernameLogin); console.log();

// eslint-disable-next-line @typescript-eslint/no-inferrable-types, prefer-const
let n1: number = 10;
//let n2: number = '25'; //Type 'string' is not assignable to type 'number'.
// eslint-disable-next-line @typescript-eslint/no-inferrable-types, prefer-const
let n2: number = 25;


function soma(valor1: number, valor2: number): string {
  // eslint-disable-next-line prefer-const
  let soma = valor1 + valor2;

  if(soma > 40){
    return 'SOMA MAIOR QUE 40';
  }else{
    return 'MENOR QUE 20';
  }


}

console.log(soma(n1, n2));