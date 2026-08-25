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