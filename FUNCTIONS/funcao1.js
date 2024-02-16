// // Exemplo 01
// function soma(a,b){  // os parâmetros "A e B funcionam como argumentos para a função funcionar"
//     const soma = a + b 
//     if(soma > 5){
//         console.log(`Valor não permitido ${soma}`)
//     }else{
//         return soma
//     }

// }

// console.log(soma(2,2)+ 4) //OK
// console.log(soma(2))//NaN
// console.log(soma()) //NaN
// console.log(soma(2,2,2,2,3,4,5)) //Realiza a operação com os dois primeiros números
// console.log(soma(2,5) + 4) //NaN

// Exemplo 2

// function multiplicacao(){
//     let multi = 1
//     for(i in arguments){
//         multi *= arguments[i]
//     }
//     return multi
// }

// console.log(multiplicacao())
// console.log(multiplicacao(5))
// console.log(multiplicacao(5,5))
// console.log(multiplicacao(5,5,5))
// console.log(multiplicacao(5,5,5,5))
// console.log(multiplicacao(5,5,5,5,5))

//Exemplo 3

// function triplo(x){
//     return 3 * x
// }

// let triplo = function(x){
//         return 3 * x
// }

// triplo = (x) =>{
//         return 3 * x
//     }
// console.log(triplo(Math.PI))

// triplo = (x) => {
//     return 3 * x
// }

// triplo = (x) => 3 * x;
// console.log(triplo(3) + 3)

// oi = (nome) => 'Oi, bisonhos!${nome}';
// console.log(oi('Bruna'));

// oi = _ => 'Oi, bisonhos!';
// console.log(oi())

//Exemplo 4

const soma = function(x, y){
    return x + y
}

const resultado = function(a, b, operacao = soma){
        console.log(operacao(a,b))
}
resultado(5, 5)
resultado(5, 5, soma)
resultado(5, 5, function(x,y){
    return x * y
})
resultado(3, 3, (x, y) => x/y)