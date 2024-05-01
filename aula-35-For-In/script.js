const frutas = ["Maçã", "Pêra", "Uva", "Banana"];

// for (let i = 0; i < frutas.length; i++) { // contador
//   console.log(frutas[i]);
// }

const pessoa = {
  nome: "Camila",
  idade: 22,
  sobrenome: "Souza",
};
// console.log(pessoa.nome);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]); // lendo os índices da lista
}
