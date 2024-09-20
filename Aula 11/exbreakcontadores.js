let contador = 0;
for(let i = 0; i < 10; i++) {
    if(i === 3) {
        continue; // Pula quando i for 3
    }
if (i === 7) {
    break; // Para o loop quando o i for 7
}
contador++; // Incrementa o contador
console.log(`i: ${i}, contador: ${contador}`);
}