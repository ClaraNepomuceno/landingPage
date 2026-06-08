function saudar(nome){
    console.log("Olá " + nome+ " Seja muito bem-vindo")
}

console.log("Hello World!")
console.log("Esse é o meu primeiro arquivo js!")


//  Comentário de bloco
/* Comentário de bloco*/


let nome = "Ana Clara"
const NOME = "Ana Clara"
console.log("Bem-vindo! " + nome)
let idade = 22

saudar(nome)

if (idade>=18){

    console.log("Você é maior de idade.")
} else if(idade<0){
    console.log("Você ainda não nasceu")

} else{

    console.log("Você é menor de idade.")

}
for (i = 0; i<10; i++){
    console.log(i)
}

const BOTAO = document.getElementById("alt-texto")

let texto_sinopse = document.getElementById ("texto-sinopse")
let texto_sinopse_destaque = document.getElementById ("texto-sinopse-destaque")
let texto_titulo = document.getElementById ("texto-titulo")
let titulo_principal = document.getElementById("titulo-principal")
document.getElementById("body")

BOTAO.addEventListener("click", function (){

texto_sinopse.style.color = "red"
texto_sinopse_destaque.style.color = "yellow"
texto_titulo.style.color = "red"
titulo_principal.style.radial= gradiente = "#FD1D1D"
document.body.style.backgroundColor = "#121a27"



})