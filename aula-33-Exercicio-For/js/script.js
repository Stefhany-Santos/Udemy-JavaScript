const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

const container = document.querySelector('.container'); // selecionando o container
const div = document.createElement('div'); // cria um elemento div

for (let i = 0; i < elementos.length; i++) { //
    let { tag, texto } = elementos[i]; // Desentruturando a tag e o texto
    let tagCriada = document.createElement(tag); // Criando a tag
    tagCriada.innerText = texto; // Adicionando o texto na tag criada
    let textoCriado = document.createTextNode(texto); // Criando o texto

    tagCriada.appendChild(textoCriado); // Adicionando o texto na tag criada
    div.appendChild(tagCriada); // Adicionando a tag criada no container
}

container.appendChild(div); // Adicionando o container ao HTML