interface TecnologiaProps1 {
  id: string;
  nome: string;
  slug: (string | number)[];
}

// eslint-disable-next-line prefer-const
let tecnologia1: TecnologiaProps1 = {
  id: "1",
  nome: "PHP",
  slug: ["php", "php-do-zero", "php12", 12]
}

console.log(tecnologia1);

interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
  }
  
  interface NomesProps{
    tecnologia: TecnologiaProps[] // array de objetos da interface
  }
  
  //eslint-disable-next-line prefer-const
  let frontend: NomesProps = {
    tecnologia: [
      { id: "12", nome: "ReactJS", descricao: "Biblioteca para criar interfaces" },
      { id: "43", nome: "VueJs", descricao: "Framework Frontend" },
      { id: "43", nome: "VueJs" }
    ]
  }
  
  console.log(frontend.tecnologia);