//let curso = "TypeScript";
const curso = "TypeScript"; //sugestão do vs code "curso is never ressigned. Use const instead" eslint...

const tecnologias = [
    'PHP',
    'REACT JS',
    2021,
];
tecnologias.push('React Native');

//curso = 150; //error TS2322: Type 'number' is not assignable to type 'string'.

console.log(curso);
console.log(tecnologias);