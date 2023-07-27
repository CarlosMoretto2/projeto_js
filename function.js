// Função sem retorno 
// Função -> Trecho de código que pode ser reutilizavel

function imprimirSoma(a, b){
    console.log(a + b)
}

//imprimirSoma(2,3,4)
//imprimirSoma(2,3)

function soma(a, b=1){
    return a + b
}

//console.log(soma(2,3))
//console.log(soma(2))
//console.log(soma())


// Armazenando uma função em uma variável
const exibirSoma = function(a,b){
    console.log(a+b)
}

exibirSoma(2,3)

//armazenando uma funcao arrow em uma variavel
const adicao = (a, b) => {
    return a + b 
}

console.log(adicao(2,3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2 ('teste')