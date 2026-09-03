// 1 - Adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("Clicou aqui !")
})

// 2 - Removendo evento

const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - Argumento do evento

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event) 
    console.log(event.offsetX) 
    console.log(event.pointerType)
    console.log(event.target)   
})

// 4 - Propagando eventos

const btnContainer = document.querySelector("#btn-container")
const btnInsiderContainer = document.querySelector("#div-btn")

btnContainer.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsiderContainer.addEventListener("click", (e) => {
    e.stopImmediatePropagation()
    console.log("Evento 2")
})

// 5 - Removendo evento padrão

const a = document.querySelector("a")

a.addEventListener("click", (e) => {

    e.preventDefault()

    console.log("Não alterou a pagina")
})

// 6 - Eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Presionou a tecla ${e.key}`)
})