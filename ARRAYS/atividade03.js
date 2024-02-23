// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.

// const array = [1,56,78,32,45];

// var soma = 0;

// for(var i =0; i < array.length; i++){
//    soma += array[i];
// }

// console.log(soma);

    //Resolução do professor:

const numeros = [1, 2, 3, 4, 5]
const somaTodos = numeros.reduce((total, atual) => { return 0, total + atual})
console.log(somaTodos)