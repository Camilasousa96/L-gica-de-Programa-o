/*Escreva um programa que continua pedindo ao usuário para
inserir uma senha até que a senha correta seja digitada.*/

senhaCorreta = "CO.DE"
senhaUsuario = prompt(`Digite a senha: `)

while(senhaUsuario !==senhaCorreta){
    senhaUsuario = prompt(`Digite a senha: `)
}
    