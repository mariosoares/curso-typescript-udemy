function totalVendas0(venda1: number, venda2: number, venda3: number, venda4:number): number{
  const total = venda1 + venda2 + venda3 + venda4;

  console.log(total);

  return total
}

totalVendas0(10, 30, 50 ,10); console.log();


function totalVendas(...vendas: number[]): void {
    const quantidadeVendas = vendas.length;
  
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`)
  }
  
totalVendas(10, 30, 25, 15, 90, 30); console.log();
  
  function mostraNomes(...nomes: string[]){
  
    console.log(nomes.length);
  
    nomes.map( nome => {
      console.log(nome);
    })
  }
  
  mostraNomes("Natan", "Lucas", "Sujeito", "Henrique", "Ana")