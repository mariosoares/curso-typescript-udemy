type Uuid = number | string | null;

// function acessar(uuid: string | number | null, nome: string)
function acessar(uuid: Uuid, nome: string){
    console.log(`ID: ${uuid} - Bem vindo ${nome}.`);
}

//function logUsuario(uuid: string | number | null)
function logUsuario(uuid: Uuid){
    console.log(`Conta referente ao UUID: ${uuid}.`)
}

acessar(123, 'matheus');
acessar('55', 'henrique');
logUsuario('123'); console.log();

type Moedas = 'BRL' | 'EUR' | 'USD';

function comprarItem(moeda: Moedas){
    console.log('Comprando com a moeda:', moeda);
}

comprarItem('BRL');
//comprarItem('BTC') //Argument of type '"BTC"' is not assignable to parameter of type 'Moedas'.ts(2345)
