// 1 - setTimeout

console.log("Ainda nao executou!")

setTimeout(function() {
    console.log("Requisição assincrona")
}, 2000)

console.log("Ainda nao executou 2!")

// 2- setInterval

console.log("Ainda nao executou!")

// setInterval(function(){
//    console.log("setInterval executou!")
// }, 3000)

console.log("Ainda nao executou!")

// 3 - Promise

const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then((value) => {
    console.log(`O valor é ${value}`)

    return value;
})

.then((value) => value -1) 
.then((value) => console.log(`Agora o valor é ${value}`)) 

console.log("Algum código 2!")

// 4 - Erro na promise

Promise.resolve(4 * "asd")

.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Erro dos valores!")
    }
})

.catch((err) => console.log(`Um erro ocorreu ${err}`))