/* 
Primitivos(imutáveis) - string, number, boolean, undefined, null (bignt, symbol) - Valores copiados

let a = 'A';
let b = a; // Cópia
console.log(a , b);

a = 'Outra coisa';
console.log(a, b);

*/


/*
Referência (mutável) - array, object, function - Passados por referência
*/

let a = [1, 2, 3];
let b = a; // O 'B' referência o 'A' pois 'B' aponta para o mesmo VALOR na memoria que o 'A'
console.log(a, b)

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

/* Operador que copia o valor. Faz com que 'B' não aponte para o mesmo VALOR na memoria
 EX: let b [...a]
*/