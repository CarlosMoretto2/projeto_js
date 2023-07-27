// Escopo, onde a variavel estara visivel
// var criada dentro de um bloco que não seja função -> fora do bloco continua visivel 
// var criada dentro de um bloco de função ->  fora do bloco invisível

var numero = 1 
{

    var numero = 2 
    console.log('dentro =', numero)

}

console.log('fora =', numero)

// 2 saidas de numero = 2 



//let possui escopo de bloco visível em 

let num = 1
{
    let num = 2 
    console.log('dentro =', num)
}

console.log('fora =', num)

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

//hoisting elevação da var para cima 