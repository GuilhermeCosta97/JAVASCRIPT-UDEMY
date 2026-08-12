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

// Funções como classe 

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("ozzy", "husky")

console.log(husky)

// Metodos na função construtora

Cachorro.prototype.uivar = function() {
    console.log("Auuuu!")
}

console.log(Cachorro.prototype)

husky.uivar()

// Classes ES6

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    } 
}

const jeff = new CachorroClasse("Jeff", "Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// Mais sobre classes

class Caminhao {
    constructor(eixo, cor) {
        this.eixo = eixo
        this.cor = cor 
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixo} eixos, e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")

console.log(scania)

scania.descreverCaminhao()

// Override

class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade 
    }
}

const guilherme = new Humano("Guilherme", 29)

console.log(guilherme)

Humano.prototype.idade = "Não definida"

console.log(guilherme.idade)

console.log(Humano.prototype.idade)

// Symbol

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)

console.log(boeing)

console.log(boeing[asas])
console.log(boeing[pilotos])

// Getter e Setter

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags  
    }

    get exibirTitulo() {
        return `Voce esta lendo: ${this.titulo} `
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Programação javascript, js"

console.log(myPost)