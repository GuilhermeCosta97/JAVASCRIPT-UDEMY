// 1 - Movimentando-se pelo DOM

console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - Selecionando elementos por Tags

const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 3 - Selecionando elementos por ID

const title = document.getElementById("title")

console.log(title)

// 4 - Selecionando elementos por Classes

const product = document.getElementsByClassName("product")

console.log(product)

// 5 - Selecionando elementos por CSS

const productQuery = document.querySelectorAll(".product")

console.log(productQuery)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

// 6 - insertBefore

const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title) // P foi inserido antes de title

// 7 - AppendChild

const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li) // mais um li add

// 8 - ReplaceChild

const h2 = document.createElement("h2")

h2.textContent = "Meu novo titulo!"

header.replaceChild(h2, title) // h1 foi trocado pelo h2

// Exercicios

const div = document.querySelector("div");
const h3 = document.createElement("h3");

const main = div.parentElement;

main.insertBefore(h3, div); // h3 add antes da div


const footer = document.querySelector("footer p")

const p2 = document.createElement("p")

footer.appendChild(p) // Um P foi add em um P existente dentro do footer


// 9 - Create textNode

const myText = document.createTextNode("Vamos add mais um titulo")

console.log(myText)

const h32 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)