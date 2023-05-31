interface CursoProps{
    id: string;
    nome: string;
    preco: number;
    //Definir apenas a função e que ela deve esperar e retornar
    promocao: (preco: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mostraPromocao(preco: number): void {
    console.log(`Promoção no curso por apenas: R$ ${preco}`);
}

const novoCurso: CursoProps = {
    id: '1',
    nome: 'Curso TypeScript',
    preco: 750,
    promocao: mostraPromocao
    // outra opção é criar diretamente a função aqui
    // promocao: (preco: number): void => {
    //     console.log('PREÇO TOTAL:', preco)
    //}
}

console.log(novoCurso);
console.log(novoCurso.promocao(350)); console.log();

interface SomaProps{
    (valor1: number, valor2: number): number;
}

// eslint-disable-next-line prefer-const
let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
    console.log('RESULTADO:', valor1 + valor2);
    return valor1+valor2;
}

const resultado = somaNumeros(15, 10);

console.log('Resultado da variável:', resultado);

