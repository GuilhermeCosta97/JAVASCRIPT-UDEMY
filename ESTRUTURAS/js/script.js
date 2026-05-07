// Variaveis 
let nome = "Guilherme";

console.log(nome);

nome = "Guilherme Costa";

console.log(nome);

const idade = 29;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// Mais sobre variaveis
// let 2teste = "invalido";
// let @teste = "invalido";

let a = 2, b = 3, c = 4

console.log(a, b, c)

const nomecompleto = "Guilherme Costa"

const nomeCompleto = "Guilherme Costa"

console.log(nomecompleto);
console.log(nomeCompleto);

// Simbolos permitidos
let _teste = "ok"
let $teste = "ok"

console.log(_teste);
console.log($teste);

// Prompt
// const age = prompt("Digite sua idade:")

// console.log(`Voçê tem ${age} anos`)

// Alert
// alert(`Testando`)

// const z = 10

// alert(`O numero é ${z}`)

// Math
console.log(Math.max(5, 6, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(6.14));

// Console
// console.log("Teste!");

// console.error("Erro!")

// console.warn("Aviso!")

// If
const m = 5

if(m < 10) {
    console.log("M é menor que 10 !")
}

const user = "João"

if(user === "João") {
    console.log("Olá joão !")
}

// Else 
const loggedIn = false;

if(loggedIn) {
    console.log("Usuario autenticado!")
} else {
    console.log("Usuario nao autenticado!")
}

const q = 5
const w = 10

if(q > 5 && w > 11) {
    console.log("Os numeros mais altos!")
} else {
    console.log("Numeros nao sao mais altos")
}

// Else if
if(1 > 2) {
    console.log("Teste")
} else if(2 > 3) {
    console.log("Teste 2")
} else if(3 > 2) {
    console.log("Agora sim!")
}

const userName = "Guilherme"
const age = 29

if(userName === "João") {
    console.log("Bem vindo João")
} else if(userName === "Guilherme" && age === 29) {
    console.log("Bem vindo Guilherme! Voçê tem 29 anos!")
} else {
    console.log("Nenhuma condição aceita!")
}

// While 
// let p = 0;

// while (p < 5) {
    //console.log(`Imprimindo ${p}`);
    //p = p + 1; 
//}

// Loop infinito
// let x = 0;

//while (x < 10) {
    //console.log(`Imprimindo ${x}`);
//}

// Do while
//let o = 10;

//do {
    //console.log(`O valor de o é: ${o}`);
    //o--;
//} while (0 > 1);

// For
/*for (let t = 0; t < 10; t++) {
    console.log(`Repetindo algo...`)
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`O r esta diminuindo ${r}`)
}*/

// Break
/*for(let g = 20; g > 10; g--) {
    console.log(`O valor de G é: ${g}`)

    if (g === 12) {
        console.log(`O valor de G é 12!`)
        break;
    }
}

for(let n = 0; n < 11; n++) {
    console.log(`O valor de n é: ${n}`)

    if(n === 9){
        console.log(`O valor de N é 9!`)
        break;
    }
}*/

// Continue
for(let n = 1; n < 10; n++) {
    //Operador resto %
    if(n % 2 === 0){
        console.log(`Numero par!`)
        continue
    }

    console.log(n);
}