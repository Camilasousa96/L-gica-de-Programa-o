/*Crie um array de números e some todos os seus valores,
exibindo o resultado.*/

let numeros = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]; // Crio array de números
let soma = 0;// Inicializo a variável para armazenar a soma

for (i=0; i<numeros.length; i++){
    soma += numeros[i];
}
console.log(soma)


