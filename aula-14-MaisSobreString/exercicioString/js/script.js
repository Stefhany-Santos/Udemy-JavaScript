const name = prompt("Digite seu nome completo: ");
document.body.innerHTML = `Seu nome é: ${name}`;
document.body.innerHTML = `Seu nome tem ${name.length} letras`;
document.body.innerHTML = `A segunda letra do seu nome é: ${name[1]}`;
document.body.innerHTML = `Qual o primeiro índice da letra no seu nome é: ${name.indexOf('y')}`;
document.body.innerHTML = `Qual o último índice da letra LETRA no seu nome? ${name.lastIndexOf('a')}`;
document.body.innerHTML = `As últimas 3 letras do seu nome são: ${name.slice(-3, name.length)}`;
document.body.innerHTML = `As palavras do seu nome são: ${name.split(' ')}`; 
document.body.innerHTML = `Seu nome com letras maiúsculas: ${name.toUpperCase()}`;
document.body.innerHTML = `Seu nome com letras minúsculas: ${name.toLowerCase()}`;