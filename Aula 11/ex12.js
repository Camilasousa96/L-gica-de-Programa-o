/*Escreva um loop do while que execute pelo menos uma vez e peça 
ao usuário para inserir um número até que ele insira um valor negativo.*/

let num;
do {
    num = parseInt(prompt("Digite um número (negativo para parar):"));
} while (num >= 0);
