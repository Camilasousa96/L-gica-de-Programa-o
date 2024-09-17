/*Crie um programa que some de 1 a 1000 utilizando for*/

function somar(){
    var soma=0;
    var count;
    for(count=1 ; count<=1000 ; count++)
        soma = soma + count;

    document.write("Soma: "+soma)
}

// Outra possibilidade

/*function somar(){
    for(var soma=0 , count=1 ; count<=1000 ; count++)
        soma += count;

    document.writeln("Soma: " +soma)
}*/