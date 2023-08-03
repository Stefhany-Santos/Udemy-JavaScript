/*
const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) { // função que verifica o dia da semana
  let diaSemanaTexto; // variavel de escopo local
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "quarta-feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "quinta-feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "sexta-feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = ": Dia não encontrado";
  }
  return diaSemanaTexto;
}

function getNomeMes(numeroMes) { // função que verifica o mês
  let nomeMes; // variavel de escopo local
  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Setembro";
      return nomeMes;
    case 9:
      nomeMes = "Outubro";
      return nomeMes;
    case 10:
      nomeMes = "Novembro";
      return nomeMes;
    case 11:
      nomeMes = "Dezembro";
      return nomeMes;
    default:
      nomeMes = " Erro: esse mês não existe!";
  }
  return nomeMes;
}

function criaData(data){ // função que cria a data
  const diaSemana = data.getDay(); // pega o dia da semana
  const numeroMes = data.getMonth(); // pega o mês

  const nomeDia = getDiaSemanaTexto(diaSemana); // chama a função que verifica o dia da semana
  const nomeMes = getNomeMes(numeroMes); // chama a função que verifica o mês

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
    ` de ${data.getFullYear()}`+ 
    ` às ${data.getHours()}:${data.getMinutes()}` 
  );
}

h1.innerHTML = criaData(data); // chama a função que cria a data
*/

const h1 = document.querySelector(".container h1"); 
const data = new Date();
const opcoes = {
  dataStyle: 'full',
  timespanStyle: 'short',
}
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
