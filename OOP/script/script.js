// Metodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au")
    }
}

console.log(animal.nome)

animal.latir()

// Aprofundamento de metodos

const pessoa = {

    nome: "Guilherme",

    getName: function () {
        return this.nome
    },

    setName: function (novoNome) {
        this.nome = novoNome
    },

}

console.log(pessoa.nome)

console.log(pessoa.getName())

pessoa.setName("Gus")

console.log(pessoa.getName())

// Prototype

const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(arr.length)

console.log(Object.getPrototypeOf(arr) )

// Mais sobre Prototype

const myObjetct = {
    a: "B",
}

console.log(Object.getPrototypeOf(myObjetct))

console.log(Object.getPrototypeOf(myObjetct) === (Object.prototype)) 

const mySecondObject = Object.create(myObjetct)

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObjetct)

// Classes basicas

const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor alemao"

console.log(pastorAlemao)

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog"

console.log(bulldog)

console.log(bulldog.patas)

// Função como classe - Função construtora

function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro 
}

const bob = criarCachorro("bob", "vira-lata")

console.log(bob)

const jack = criarCachorro("jack", "pitbull")

console.log(Object.getPrototypeOf(jack))