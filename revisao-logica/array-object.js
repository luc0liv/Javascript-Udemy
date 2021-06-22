const users = [{
  nome: "Maria",
  idade: 40,
  email: "maria@gmail.com"
}, {
  nome: "Luciana",
  idade: 27,
  email: "luciana@gmail.com"
}, {
  nome: "Pedro",
  idade: 32,
  email: "pedro@gmail.com"
}]

for (i = 0; i < users.length; i++) {
  console.log(`Nome é ${users[i].nome}, a idade é ${users[i].idade} e o email é ${users[i].email}`)
}