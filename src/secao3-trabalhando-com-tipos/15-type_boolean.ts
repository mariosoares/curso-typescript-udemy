// Type BOOLEAN

let variavel;
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
let estaAutenticado: boolean = true;

// estaAutenticado = false

// eslint-disable-next-line @typescript-eslint/no-inferrable-types, prefer-const
let codeStatus: string = '';

// Tudo que for diferente de zero, string vazia, undefined, será verdadeiro.
estaAutenticado =  Boolean(codeStatus);
console.log(estaAutenticado);

estaAutenticado =  Boolean(1);
console.log(estaAutenticado);

estaAutenticado =  Boolean(variavel);
console.log(typeof variavel)
console.log(estaAutenticado);
