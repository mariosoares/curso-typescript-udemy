interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string; 
  }
  
  // eslint-disable-next-line prefer-const
  let produto1: ProdutoProps = {
    id: "1",
    nome: "Tenis Nike",
    descricao: "Super tenis descolado"
  }
  
  console.log(produto1);

  //produto1.id = '123'; // erro -> propriedade readonly
  produto1.nome = "Tenis Nike 2.0";
  
  console.log(produto1.id);
  console.log(produto1.nome);