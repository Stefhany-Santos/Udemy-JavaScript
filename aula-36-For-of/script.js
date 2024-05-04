const nomes = ["Cristina", "Marcos", "Ana", "Luís"];

// For clássicos - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("===========");

for (let index in nomes) {
  // retorna o índice
  console.log(nomes[index]);
}

console.log("===========");

for (let valor of nomes) {
  console.log(valor);
}

console.log("===========");

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
