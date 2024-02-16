const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
const array1 = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

// //Listar
// array.forEach((elemento)=>{console.log(elemento)}) // Função que receber outra função como parâmetro, que são as callbacks (esta função pode receber 3 parâmetros). O forEach serve para LISTAR o array.
// array.forEach((elemento, indice)=>{console.log(`${indice} - ${elemento}`)}) // Esta função pode receber até 3 parâmetros, mas apenas 1 é obrigatório, os outros dois são opcionais.

// const listarDados = (elemento) => console.log(elemento)
// array.forEach(listarDados) //Lógica global que pode ser utilizada em todo o código quando quiser.

// // //Método MAP
// console.log(array)
// array.map((elemento)=>{console.log(elemento * 3)}) //Lista os dados do array, cria um novo array e o modifica, preservando o array original.

// const listarMap = elemento => console.log(elemento)
// array1.map(listarMap)

const maiorQue30 = array.find((elemento)=>{return elemento > 30})
console.log(maiorQue30) //Procura o PRIMEIRO ELEMENTO que atende a condição e para, listando apenas esse elemento.

const maiorQue31 = array.filter((elemento)=>{return elemento > 31})
console.log(maiorQue31) //Procura TODOS OS ELEMENTOS que atendem a condição, listando todos os elementos.
