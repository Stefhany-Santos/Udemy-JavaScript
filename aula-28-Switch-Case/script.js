const DATA = new Date("2022-07-3");
const AGENTE_DATE_MONTH = DATA.getDate(); // variavel que recebe o dia da semana
//let agenteDateText; // iniciando a variavel sem valor
const agenteDateText = getAgenteDateText(AGENTE_DATE_MONTH); // recebendo o parametro da funcao
/*======= SWITCH CASE - CHECANDO PERSONAGEM DE ACORDO COM O DIA DA SEMANA =====*/
/*
switch (AGENTE_DATE_MONTH) {
  case 0:
    agenteDateText = "Sage";
    break;
  case 1:
    agenteDateText = "Yoru";
    break;
  case 2:
    agenteDateText = "Astra";
    break;
  case 3:
    agenteDateText = "Jett";
    break;
  case 4:
    agenteDateText = "Cypher";
    break;
  case 5:
    agenteDateText = "Sova";
    break;
  case 6:
    agenteDateText = "Raze";
    break;
  default:
    agenteDateText = ": Agente não encontrado";
}
*/
/* FUNÇÃO USANDO SWITCH CASE E UTILIZANDO O 'RETURN' NO LUGAR DO 'BREAK'*/

function getAgenteDateText(AGENTE_DATE_MONTH) {
  let agenteDateText; // variavel de escopo local
  switch (AGENTE_DATE_MONTH) {
    case 0:
      agenteDateText = "Sage";
      return agenteDateText;
    case 1:
      agenteDateText = "Yoru";
      return agenteDateText;
    case 2:
      agenteDateText = "Astra";
      return agenteDateText;
    case 3:
      agenteDateText = "Jett";
      return agenteDateText;
    case 4:
      agenteDateText = "Cypher";
      return agenteDateText;
    case 5:
      agenteDateText = "Sova";
      return agenteDateText;
    case 6:
      agenteDateText = "Raze";
      return agenteDateText;
    default:
      agenteDateText = ": Agente não encontrado";
  }
  return agenteDateText;
}

/*
if (DIA_SEMANA === 0) {
  diaSemanaTexto = "Domingo";
} else if (DIA_SEMANA === 1) {
  diaSemanaTexto = "Segundo";
} else if (DIA_SEMANA === 2) {
  diaSemanaTexto = "Terça";
} else if (DIA_SEMANA === 3) {
  diaSemanaTexto = "Quarta";
} else if (DIA_SEMANA === 4) {
  diaSemanaTexto = "Quinta";
} else if (DIA_SEMANA === 5) {
  diaSemanaTexto = "Sexta";
} else if (DIA_SEMANA === 6) {
  diaSemanaTexto = "Sábado";
} else {
  diaSemanaTexto = "";
}
*/
/* SWITCH CASE: DIA DA SEMANA
switch (DIA_SEMANA) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda";
    break;
  case 2:
    diaSemanaTexto = "Terça";
    break;
  case 3:
    diaSemanaTexto = "Quarta";
    break;
  case 4:
    agenteDateText = "Quinta";
    break;
  case 5:
    diaSemanaTexto = "Sexta";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    agenteDateText = "Dia não encontrado";
}
*/

console.log(AGENTE_DATE_MONTH, agenteDateText);