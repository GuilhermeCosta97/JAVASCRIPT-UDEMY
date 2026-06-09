// Arrays (utilizado como lista de itens)

const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Matheus", true, 2, 5.25, []]

console.log(itens)

// Mais sobre arrays

const arr = ["a", "b", "c"]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[83])

// Propriedades 

const number = [5, 5, 6]

console.log(number.length)

console.log(number[`length`])

const myName = "Guilherme"

console.log(myName.length) 

// Objetos (utilizado para descrever um item)
const person = {
    name: "Guilherme",
    age: 28,
    job: "Programador",
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)

// Criando e deletando propriedades 
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// Mais sobre objetos

const obj = {
    a: "Teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: [],
}

Object.assign(obj2, obj)

console.log(obj2)

console.log(obj)

// Conhecendo mais sobre objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// Mutação 

const  a = {
    name: "Matheus"
}

const b = a

console.log(a)
console.log(b) 

console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// Loop em arrays
const users = ["Guilherme", "Matheus", "Jean", "Diego"]

for (i = 0; i < users.length; i++) {
    console.log(`Listando usuario: ${users[i]}`)
}