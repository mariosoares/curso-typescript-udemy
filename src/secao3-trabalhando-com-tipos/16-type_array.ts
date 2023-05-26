/* eslint-disable prefer-const */
// Type Array.


// let filmes: Array<string>;
// let filmes: string[];

// let filmes: Array<string | number>;
let filmes: (string | number)[];

filmes = ["Filme 1", "Filme 2"];

filmes.push(15);

console.log(typeof filmes);
console.log("Meus filmes ", filmes); console.log();

let numeros: number[];
numeros = [1, 5, 21, 30];

console.log(numeros);

numeros.push(55);
//numeros.push('55');  //erro

console.log(typeof numeros);
console.log('Meus numeros: ', numeros);