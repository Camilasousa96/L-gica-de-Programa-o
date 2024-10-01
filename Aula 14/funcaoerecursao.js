/*Uma função é um bloco de código que pode ser chamado pelo nome,
passar valores (parâmetros) e retornar um valor final (ou undefined).
Funções ajudam a modularizar o código e a torná-lo mais reutilizável
e organizado.
Características de uma Função:
Bloco de código independente.
Pode receber parâmetros e retornar valores.
Não precisa se chamar novamente para ser considerada uma
função.
Nesse exemplo, a função soma simplesmente pega dois números
como entrada e retorna sua soma. Não há recursão aqui, pois ela
não se chama dentro de si mesma.*/

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3)); // Saída: 8