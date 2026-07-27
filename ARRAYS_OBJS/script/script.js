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

// Shift e Unshift

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift = ("p", "q", "r")

letters.unshift = ("z")

console.log(letters)

// indexOf e lastIndexof

const myElements = ["Morango", "Banana", "Pêra", "Banana"]

console.log(myElements.indexOf("Banana"))
console.log(myElements.indexOf("Pêra"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Banana")])

console.log(myElements.lastIndexOf("Banana"))

console.log(myElements.indexOf("Mamão"))

console.log(myElements.lastIndexOf("Mamão"))

// slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O número atual é: ${n}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// trim
const trimTest = "  testando \n   ";

console.log(trimTest.trim());

console.log(trimTest);

console.log(trimTest.trim().length);

console.log(trimTest.length);

// padstart

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split();

console.log(arrayDaFrase);

// join
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// repeat
const palavra = "Testando";

console.log(palavra.repeat(5));

// rest operator
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 5, 10));

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// destructuring objetos
const userDetails = {
  firstName: "Matheus",
  lastName: "Battisti",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomeando variáveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);

// destructuring me arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

//  json
const myJson =
  '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// json para objeto e objeto para json
const myObject = JSON.parse(myJson);

console.log(myObject);

// json invalido
const badJson =
  '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);