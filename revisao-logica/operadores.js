// operadores aritméticos -> + - * / % **


/*let n1 = 10;
let n2 = 5;
console.log( n1 + n2);
console.log( n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log( n1 ** 2);
*/
// operadores de atribuição

let n3 = 20;
//n3 = n3 + 15;
//ou
//n3 += 15;

// console.log(n3);

// incremento e decremento

let i = 0;
//i += 1; ou


/*
console.log(i);
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);
*/

// Comparação

// igualdade de valor ==
// igualdade de valor E tipo ===
// < , > , <= , >=
// != valores diferentes
// !== valores E tipos diferentes

let n5 = "10";
/*
console.log(n1 === n5);
console.log(n2 >= n1);
console.log(n1 !== n5);
*/


//OPERADORES LÓGICOS

/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU
- acompanhado dos pais
*/

/*let idade = 21;
let paisPresentes = true;
let comprouBilhete = false;
const podeViajar = idade >= 18 || paisPresentes && comprouBilhete === true;

console.log(`Pode viajar: ${podeViajar}`);*/

// PRECEDÊNCIA DE OPERADORES
let idade = 17;
let paisPresentes = true;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; //O && tem preferência (é executado primeiro), por isso os parênteses são necessários!

console.log(`Pode viajar: ${podeViajar}`);
//condicional if, else
if (!comprouBilhete) {
  console.log("Não comprou o bilhete")
} else {
  if (idade >= 18) {
    console.log("É maior de idade, pode viajar")
  } else {
    console.log("é menor de idade")
  }
}

let n1 = 4;
let n2 = 3;
let media = (n1 + n2)/ 2;
console.log(`Média: ${media}`);

if (n1 === 0 || n2 === 0 || media < 4) {
  console.log("Reprovade")
} else if ( media < 7 && media > 4) {
  console.log("Em recuperação")
} else {
  console.log("Aprovade")
}


