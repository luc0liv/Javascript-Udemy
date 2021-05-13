let diaSemana = 4;
let dia = "";

switch (diaSemana) {
  case 0:
    dia = "Segunda-feira";
    break;

  case 1:
    dia = "Terça-feira";
    break;

  case 2:
    dia = "Quarta-feira";
    break;

  case 3:
    dia = "Quinta-feira";
    break;

  case 4:
    dia = "Sexta-feira";

  case 5:
    dia = "Sábado";
    break;

  default:
    dia = "Domingo";
}

console.log(`Hoje é ${dia}`);
