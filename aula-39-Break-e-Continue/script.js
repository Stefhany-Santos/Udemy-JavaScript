const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// pode ser feito com For clássico, For in, While e DoWhile
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue;
  }

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }

  console.log(numero);
}
