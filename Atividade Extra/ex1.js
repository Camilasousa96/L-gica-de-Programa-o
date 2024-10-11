/*Questão 1: Elaborar um programa que adicione números a um vetor. 
O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão.*/

var numeros = [];

while(true) {
    var numero = parseFloat(prompt('Insira um numero: '));
    if(isNaN(numero)){
        break;
    }

    if(!numeros.includes(numero)){
        numeros.push(numero);
        console.log(`Lista atualizada: ${numeros}`);
    } else{
        console.log(`O numero ${numero} ja consta na lista!`);
    }
}

console.log(numeros)