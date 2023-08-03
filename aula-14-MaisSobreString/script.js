/* let umaString = "Um \"texto\"";   Usamos "\" como caracter de escape */

//indice         01234567
// let umaString = "Um texto";
// console.log(umaString[4]); para saber o elemento do indice

// console.log(C); // saber o elemento da posição 

// console.log(`${umaString} em um lindo dia.`); // templete string

//console.log(umaString.indexOf('texto'));   // Saber qual indice começa na palavra texto

// console.log(umaString.indexOf('x', 3));  // encontrar a letra "X" de pois do indece 3

// console.log(umaString.lastIndexOf('m', 3));  // encontrar indices de trás para frente

// console.log(umaString.match(/[a-z]/g)); // expressao regular. Essa expresasão retorna apenas as letras minusculas

// console.log(umaString.search(/[x]/)); // expressao regular. Retorna um indice onde o que foi declarado foi encontrado 

// console.log(umaString.replace(/Um/, 'Outro')); // expressao regular. Alterando a palavra 'Um' por 'Outra'.
// console.log(umaString.replace(/t/g, '#')); // Alterar todas as letras 'T' por '#'

// console.log(umaString.length);  // Para saber o tramanho de uma string

// console.log(umaString.slice(1, 7));   // Para fatiar uma string. Também pode usar números negativos

// console.log(umaString.substring(umaString.length -2, umaString.length -1)); Para fatiar uma string

let umaString = "O rato roeu a roupa do rei de roma.";
// console.log(umaString.split(' ', 3)); // Divir uma string em todos os espaços

console.log(umaString.toLowerCase()); // Retorno a string toda em minusculo
console.log(umaString.toUpperCase()); // Retorna a string todo em maiúsculo
