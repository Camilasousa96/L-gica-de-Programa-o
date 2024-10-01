/*Exemplo de Implementação de
Matrizes (Arrays de Arrays)*/


// Definido uma matriz 2x3 (2 linhas e 3 colunas)
let matriz = [
    [1, 2, 3], // Primeira linha
    [4, 5, 6]  // Segunda linha

];

// Acessando um elemento específico
console.log(matriz[0][1]); // Saída: 2 (elemento da primeira linha e segunda)

// Modificando um elemento específico
matriz[1][2] = 10;
console.log(matriz[1][2]); // Saída: 10 (segunda linha, terceira coluna)

// Iterando sobre os elementos de uma matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento na posição [${i}][${j}] = ${matriz[i][j]}`);
    }
}