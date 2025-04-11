function calcular() {
    //dados
    let nome = prompt("Qual seu nome?");
    let altura = prompt("Altura em cm:");
    let peso = prompt("Peso em kg:");

    //converter
    altura = altura / 100; // cm → m
    peso = parseFloat(peso);

    //calculos
    let imc = peso / (altura * altura);

    // classeficar
    let tipo;
    if (imc < 18.5) tipo = "Abaixo do peso";
    else if (imc < 25) tipo = "Peso normal";
    else if (imc < 30) tipo = "Sobrepeso";
    else tipo = "Obesidade";
    
    //saida
    document.getElementById("resultado").innerHTML = `
        ${nome}, seu IMC é ${imc.toFixed(1)} (${tipo})`;
}