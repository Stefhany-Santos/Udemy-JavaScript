/*==================== FUNÇÕES EXECUTAM AÇÕES ====================*/

/*==========   FUNCAO QUE RETORNA VALOR  ==========
 
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const nomeUsuario = saudacao('Stefhany');
console.log(nomeUsuario);
=====================================================*/

/*==========   FUNÇÃO COM PARAMETROS   ==========
 
function soma(x = 1, y = 1) { // Caso o usuario não informe o segunda parametro vai contar como 1
    const resultado = x + y;
    return resultado; // tudo que esta abaixo de return não é mais executado
    console.log("NÃO RETORNA NADA DEPOIS DE RETURN");
}

console.log(soma(3, 3));

===================================================*/

/*==========   FUNÇÃO DENTRO DE UMA VARIAVEL   ==========

const raiz = function (n) {
    return n ** 0.5; // saber a raiz quadrada
};

console.log(raiz(9));

==========================================================*/
/*==========   MESMO EXERCÍCIO MAS UTILIZANDO ARROW FUNCTION   ==========

const raiz = n => n ** 0.5;

console.log(raiz(9));

==========================================================================*/
