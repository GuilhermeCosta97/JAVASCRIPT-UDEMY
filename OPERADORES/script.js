// Number
console.log(typeof 1);
console.log(typeof 3.5);
console.log(typeof -458);

// Op. aritmeticas 
console.log(2 + 5);
console.log(5 - 2);
console.log(2 * 5);
console.log(5 / 2);
console.log(4 + 5 * 9);

// Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(4 * "NaN");

console.log(typeof NaN);

// Textos
console.log("Um texto");
console.log(`Mais um texto`);
console.log("13");

console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);
console.log(typeof "13");

// Simbolos especiais em strings
console.log("Texto com \n quebra de linha");
console.log("Espaçamento \t em tab");

// Concatenação
console.log("Meu" + " texto" + " combinado");
console.log(`Testando ` + `com` + ` crase!`)

// Template de strings
console.log(`A some de 2 + 2 é: ${2 + 2} `);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// Bolean
console.log(true);

console.log(5 > 6);

console.log(10 <30);

console.log(typeof true);

//Comparações 
console.log(5 <= 5);
console.log(5 == 10);
console.log(10 != 90);
console.log(10 === 10);

// Identico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 5);

console.log(5 > 2 && "Matheus" === 1 );

console.log(5 > 2 || "Matheus" === 1 );

console.log(5 > 2 || 2 > 5);

console.log(!false);

console.log(!5 > 2);

// Empty values
console.log(typeof null, typeof undefined);

console.log(null == undefined);

console.log(null === undefined);

console.log(null == false);

console.log(undefined == false);

// Mudança de tipos 
console.log(5 * null);

console.log("teste" + "opa");

console.log("10" + 1);

console.log("10" - 1);