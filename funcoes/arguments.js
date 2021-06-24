const somar = (...args) => {
  console.log("arguments", args)
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i]
  }
  return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4))
console.log(somar(1, 2, 3, 4, 5))



// function somar() {
//   console.log(arguments)
//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i]
//   }
//   return total
// }

// console.log(somar(1, 2, 3))
// console.log(somar(1, 2, 3, 4))
// console.log(somar(1, 2, 3, 4, 5))
