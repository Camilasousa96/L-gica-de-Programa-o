/*Crie um script que exiba a seguinte informação: oi, sou h1 e assim por diante até h6*/

function exibir(){
    for(var x=1; x<=6 ; x++)
        document.write("<h"+x+">Oi, sou o H"+x+"</h"+x+">");
}