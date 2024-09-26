/*Crie um array com 10 números e conte quantos são maiores que
50.*/

let numeros = [15, 20, 35, 50, 62, 77, 85, 91, 51, 96];
maiorQueCinquenta = 0;

for (i=0; i<numeros.length; i++){
    if (numeros[i]> 50){
        maiorQueCinquenta++;
    }
}
console.log(maiorQueCinquenta);