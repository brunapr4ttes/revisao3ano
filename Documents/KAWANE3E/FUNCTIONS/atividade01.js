// Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo.

function valoruni(x){
    if (x > 0) {
        return 1
    }else{
        return 0
    }
}
console.log(valoruni(5))

        // Resolução do Professor:

// function verifica(num){
//     if (num < 0){
//     return 1;
//     } else {
//         return 0;
//     }
// }
// console.log(verifica(5))
// // valor ? verdadeira : falso
// const verifica1 = (x) => x > 0 ? 1 : 0
// console.log(verifica1(5))