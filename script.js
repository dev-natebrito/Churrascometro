let inputAdultos = document.getElementById("adultos");
let inputCriancas= document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
function calcular(){
    console.log("calculando...")
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + ((carnePP(duracao) * criancas)/2);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos ;
    let qdtTotalBebida = bebidaPP(duracao) * adultos + ((bebidaPP(duracao) * criancas)/2);



    resultado.innerHTML =  `<p>${qdtTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 2000)} Garrafas de Àgua/Refrigerante</p>`
    
}
function carnePP(duracao){
    if(duracao >= 6){
       return 650;
    }else
    return 400;
}
function cervejaPP(duracao){
    if(duracao >= 6){
       return 2000;
    }else
    return 1200;
}
function bebidaPP(duracao){
    if(duracao >= 6){
       return 1500;
    }else
    return 1000;
}

