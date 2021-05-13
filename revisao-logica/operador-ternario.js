let idade = 14;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; //O && tem preferência (é executado primeiro), por isso os parênteses são necessários!
console.log (`Pode viajar? ${podeViajar}`);
let msgDeMaior = (idade>=18) ? "É maior de idade" : "Não é maior de idade";

if (!comprouBilhete) {
  console.log("Não comprou o bilhete")
} else {
  console.log(msgDeMaior)
}
