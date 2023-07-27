// JSON -> Javascript Object notation
// Formato textual de objetos diferente do objeto em js

//Objeto conjunto chave e valor

const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 2499.99
prod1['Desconto'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',  
    preco: 19.90,

}

console.log(prod2)