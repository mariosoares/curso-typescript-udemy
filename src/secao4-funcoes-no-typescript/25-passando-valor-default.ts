// Como deixar um valor por default ou deixar ele opcional.

function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void { // idade é opcional, number or undefined
    // eslint-disable-next-line prefer-const
    let data = { email, senha, nome, idade };

    console.log(data);

}

cadastro("teste@teste.com", "123123");
cadastro("teste@teste.com", "123123", "Sujeito Programador");
cadastro("teste@teste.com", "123123", "Sujeito Programador", 28); console.log();


function cadastroLoja(nome: string, email: string, status = false): boolean {

    console.log("Status atual da loja: ", status);

    return status;
}


//cadastroLoja("Buruger K", "bk@teste.com", true);

// eslint-disable-next-line prefer-const
let statusCadastro: boolean = cadastroLoja("Buruger K", "bk@teste.com", true);
console.log(statusCadastro);
