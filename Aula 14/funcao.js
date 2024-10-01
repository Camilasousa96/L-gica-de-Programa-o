/*Uma função é um bloco de código que executa uma tarefa
específica e pode retornar um valor.
Um procedimento é semelhante a uma função, mas não retorna
valor. Em JavaScript, todos os blocos de código criados com
function são tecnicamente funções, mesmo que não retornem
um valor.*/

// Função que retorna a soma de dois números
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3)); // Saída: 5

// Procedimento (função sem retorno explícito)
function mostrarMensagem(mensagem) {
    console.log(mensagem);
}
mostrarMensagem('Olá, isso é um procedimento!');