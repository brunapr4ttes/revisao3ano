function calcular(){
const peso = Number(document.getElementById("peso").value)
const altura = Number(document.getElementById("altura").value)
let imc = peso / (altura * altura)

if (imc <= 16.9) {
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Muito abaixo do peso`

}else if(imc >= 17 && imc <= 18.4){
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Abaixo do peso`

}else if(imc >= 18.5 && imc <= 24.9){
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Peso normal`

}else if(imc >= 25 && imc <= 29.9){
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Acima do peso`
    
}else if(imc >= 30 && imc <= 34.9){
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Obesidade grau I`

}else if(imc >= 35 && imc <= 40){
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Obesidade grau II`

}else if(imc > 40){
    document.getElementById("resultado").innerHTML = `${imc.toFixed(2)} - Obesidade grau III`
    }
}