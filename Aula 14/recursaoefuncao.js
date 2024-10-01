/*Recursão é um conceito que acontece quando uma função se chama
a si mesma. A recursão é frequentemente usada para resolver
problemas que podem ser divididos em subproblemas menores do
mesmo tipo. O uso de recursão exige duas coisas:
Caso base: Uma condição para parar a recursão, evitando um
loop infinito.
Caso recursivo: A condição em que a função continua se
chamando com um valor reduzido ou transformado,
aproximando-se do caso base.*/

function fatorial(n) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Chama a função novamente (recursão)
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120