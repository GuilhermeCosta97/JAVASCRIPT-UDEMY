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