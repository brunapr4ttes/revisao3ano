let peso, altura

peso = window.document.getElementById(peso).value
altura = window.document.getElementById(altura).value
let imc = (peso / altura) * 2

if (imc < 16.9) {
    document.write(`Muito abaixo do peso`)

}else if(imc >= 17 && imc <= 18.5){
    document.write(`Abaixo do peso`)

}else if(imc >= 18.5 && imc <= 24.9){
    document.write(`Peso normal`)

}else if(imc >= 25 && imc <= 29.9){
    document.write(`Acima do peso`)

}else if(imc >= 30 && imc <= 34.9){
    document.write(`Obesidade grau I`)

}else if(imc >= 35 && imc <= 40){
    document.write(`Obesidade grau II`)

}else if(imc > 40){
    document.write(`Obesidade grau III`)
}
