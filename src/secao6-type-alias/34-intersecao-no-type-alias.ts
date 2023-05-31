// Type Alias cosneguimos criar tipos mais poderosos, com mais informaçoes do que tipos primitivos

type Info = {
  id: number;
  nome: string;
  descricao?: string; // descricao é opcional
}

const produtoInfo: Info = {
  id: 123,
  nome: "Placa de Video",
  // descricao: "Plaga GTX 2090"
}
console.log(produtoInfo); console.log();

type Categoria = {
  slug: string;
  quantidadeProduto: number;
}

const categoria1: Categoria = {
  slug: "hardware",
  quantidadeProduto: 2
}
console.log(categoria1); console.log();

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a intercessao (UNIAO) entre Info e Categoria

const novoProduto: ProdutoInfo = {
  id: 54321,
  nome: "Teclado RGB",
  slug: "teclado-mecanico",
  quantidadeProduto: 10,
}

console.log(novoProduto);