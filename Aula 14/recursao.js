/*Recursão acontece quando uma função se chama repetidamente
para resolver um problema, até encontrar uma condição de
parada (caso base).*/

function fatorial(n) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Chama a função novamente (recursão)
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120