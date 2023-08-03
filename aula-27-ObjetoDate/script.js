//                    ano  mes dia  hora
const data = new Date();
/*
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
*/
// console.log(data.toString());
//console.log(Date.now()); // obter os milessimos de segundos da data atual. E são salvas no banco de dados com o value

/*===============================================*/
function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function formatandoData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	// const hora = zeroAEsquerda(data.getHours());
	// const minutos = zeroAEsquerda(data.getMinutes());
	// const segundos = zeroAEsquerda(data.getSeconds());
	return `${dia}/${mes}/${ano}`;
}

const dataAtual = new Date();
const dataBrasil = formatandoData(dataAtual);
console.log(dataBrasil);
