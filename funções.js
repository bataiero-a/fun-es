// 01 
function atv1(nome,nota1,nota2,nota3) {
    let media = (nota1 + nota2 + nota3) /3
    
    if(media >=7){
        console.log(nome + " esta aprovado com a media: " + media);

    } else{
        console.log(nome + " esta reprovado com a media: " + media);
    }
}

// 02 

function atv2(numero1,numero2){
    let diferença = (numero1 - numero2)
     
    if (numero1 > numero2){
        console.log("a diferença é: " + diferença)

    }else{
        if (numero2 > numero1){
            console.log("A diferença é: " + diferença)
        }
    }
    

}


// 03

function atv3(num1){
    for(i = 1; i <= 10; i ++){
resultado = i * num1
console.log( num1 + " X " + i + " = " + resultado )
    }
}

// 04 


function atv4(idade) {
    if (idade < 12) {
        console.log("Você é criança");
    } 
    else if (idade >= 12 && idade <= 17) {
        console.log("Você é adolescente");
    } 
    else if (idade >= 18 && idade <= 59) {
        console.log("Você é adulto");
    } 
    else if (idade >= 60) {
        console.log("Você é idoso");
    }
}

// 05

function atv5(largura, altura) {
    let resultado = largura * altura
    console.log("a area do seu retangulo é "+ resultado +"cm²");
 
   
}



// 06

function atv6 (num1){
    for(let i = num1; i >= 0 ; i = i-1){
        
        console.log( i )
    }
}

// 07

function atv7 (salarioUsuario){
    if (salarioUsuario < 1000) {
    salarioUsuario = salarioUsuario * 1.20
    console.log(salarioUsuario)
}
else {
    if (salarioUsuario <= 2000) {
        salarioUsuario = salarioUsuario * 1.15
        console.log(salarioUsuario)
    }
    else {
        salarioUsuario = salarioUsuario * 1.10
        console.log(salarioUsuario)
    }
}
}

// 08

function atv8(numero) {
    if ( numero % 2 == 0){
        console.log("Seu numero é par:" + numero);
       
    } else{
        console.log("Seu numero é impar:" + numero);
       
    }
   
}

// 09

function atv9 (temperatura){
    if (tipoTemperatura == "C") {
    console.log("Você escolheu Celsius!")
    temperaturaConvertida =((temperatura * 1.8) + 32)
} else {
    console.log("Você escolheu Fahrenheit!")
    temperaturaConvertida = ((  temperatura - 32) * (5/9))
}



console.log("O valor convertido é: " + temperaturaConvertida)
}

// 10

function 