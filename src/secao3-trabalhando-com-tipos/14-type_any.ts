/* eslint-disable prefer-const */
// Type ANY | Ou seja qualquer coisa, Nao é legal usar!

let precoProduto;
console.log(typeof precoProduto);

precoProduto = true;
console.log(typeof precoProduto);

precoProduto = 25.90;
console.log(typeof precoProduto);

precoProduto = "Sujeito Programador"
console.log(typeof precoProduto); 
console.log(precoProduto); console.log();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let nota1: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let nota2: any;

nota1 = 15;
nota2 = 20;
console.log(typeof nota1);
console.log(nota1 + nota2);

nota1 = "15";
console.log(typeof nota1);
console.log(nota1 + nota2);