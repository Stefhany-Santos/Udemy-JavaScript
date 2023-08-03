const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var tem escopo de função
let nome = 'João'; // criando
var nome2 = 'Maria';

if (verdadeira) {
    let nome = 'Stefhany'; // criando
    var nome2 = 'Carla'; // Redeclarando

    if (verdadeira) {
        var nome2 = 'Almeida'; // Redeclarando
        let nome = 'Outra coisa'; 
    }
}
console.log(nome, nome2 );