/*Utilize um loop do while que continue pedindo ao usuário para 
digitar "sim" até que ele digite algo diferente.*/

let resposta;
do {
    resposta = prompt("Digite `Sim` para continuar:");
} while (resposta.toLowerCase() == "Sim");