// Capturar o evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
	// prevenindo o evento padrão do submit
	event.preventDefault();

	/*==== pegando os valores dos inputs ====*/
	const inputPeso = event.target.querySelector('#peso');
	const inputAltura = event.target.querySelector('#altura');

	/*pegando o valor do input e convertendo para number*/
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	/* Diferente de altura, ouseja, se a altura não for válida*/
	if (!peso) {
		setResultado('Peso inválido', false);
		return;
	}

	/* Diferente de altura, ouseja, se a altura não for válida*/
	if (!altura) {
		setResultado('Altura inválida');
		return;
	}

	/* Calcula o peso e altura */
	const imc = getImc(peso, altura);
	/* retornando o imc */
	const nivelImc = getNivelImc(imc);

	const msg = `Seu IMC é ${imc} (${nivelImc}).`;

	/*Chamando o resultado*/
	setResultado(msg, true); // flag pra dizer se for verdadeiro ou não
});

/*
Menos do que 18,5 Abaixo do peso
Entre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1
Entre 35 e 39,9 Obesidade grau 2
Mais do que 40 Obesidade grau 3

*/

/*=====================  FUNÇÃO QUE RETORNA O NIVEL IMC  ===================*/
function getNivelImc(imc) {
	const nivel = [
		'Abaixo do peso',
		'Peso normal',
		'Sobrepeso',
		'Obesidade grau 1',
		'Obesidade grau 2',
		'Obesidade grau 3',
	];

	if (imc >= 39.9) return nivel[5];
	if (imc >= 34.9) return nivel[4];
	if (imc >= 29.9) return nivel[3];
	if (imc >= 24.9) return nivel[2];
	if (imc >= 18.5) return nivel[1];
	if (imc < 18.5) return nivel[0];
}

/*==================== Função que calcula peso e altura =================*/
function getImc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc.toFixed(2); // retorna o imc com duas casas decimais
}

/*====================== FUNÇÃO QUE CRIA PARAGRAFOS =====================*/
function criaParagrafo() {
	const p = document.createElement('p');
	return p;
}

function setResultado(mensagem, isValid) {
	const resultado = document.querySelector('#resultado');
	resultado.innerHTML = '';

	const p = criaParagrafo();
	p.innerHTML = mensagem;
	resultado.appendChild(p);

	if (isValid) {
		p.classList.add('resultado-valido');
	} else {
		p.classList.add('resultado-invalido');
	}
}
