// [] =  ARRAY
// {} = OBJETO

/*
function criaPessoa (nome, sobrenome, idade){
   return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
   }; 
} */

/*==== FORMA SIMPLIFICADA ====
function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
} */

/*
const pessoa1 = criaPessoa('Stefhany', 'Santos', 21);
const pessoa2 = criaPessoa('Enzo', 'Santos', 11);
console.log(pessoa1.nome, pessoa2.nome);
*/

/*=============================  FUNÇÃO DENTRO DE UM METODO   ============================================*/

const pessoa1 = {
    nome: 'Stefhany',
    sobrenome: 'Santos',
    idade: 21,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++; // soma mais 1
    }
}

pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala();
