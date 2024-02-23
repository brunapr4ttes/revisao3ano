//Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

// function funcaodobro(x){
//     const dobro = x * 2
// }

// function funcaotriplo(y){
//     const triplo = y * 3
// }

// const resultado = function(dobro, triplo){
//     console.log()
// }



// const dobro = function(x){
//     return x * 2
// }
// let triplo = function(y){
//     return x * 3
// }


// const resultado = function(x, y operacao = soma){
//     console.log(operacao(a,b))
// }

// const soma = function(x, y){
//     return x + y
// }

// const resultado = function(a, b, operacao = soma){
//         console.log(operacao(a,b))
// }

        // DAQUI PRA CIMA DEU TUDO ERRADO :(

        // Resolução do professor:

const dobroF = (x) => 2 * x
const triploF = (x) => 3 * x

const resultado = function(param, fun1, fun2){
    const dobro = fun1(param)
    const triplo = fun2(param)
    console.log(`O número ${param}, dobro: ${dobro}, triplo: ${triplo}`)
}

resultado(2, dobroF, triploF)