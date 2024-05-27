// O NOME DA DISCIPLINA, CODIGO DA TURMA E O NOME E MATRICULA ESTÁ NO README.MD DO REPOSITORIO

function isPrime(num) { //função para 
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findLargestPrimes() {
    const input = parseInt(prompt("Digite um número:"));
    const largestPrimes = [];

    for (let num = input; largestPrimes.length < 10; num--) {
        if (isPrime(num)) {
            largestPrimes.push(num);
        }
    }

    console.log("Os 10 maiores números primos a partir de", input, "são:");
    console.log(largestPrimes);
}


function verificarPrimos() {
    const userInput = parseInt(prompt("Digite um número positivo:"));
    if (userInput <= 0) {
        console.log("Por favor, digite um número positivo válido.");
        return;
    }

    for (let i = 2; i <= userInput; i++) {
        if (isPrime(i)) {
            console.log(`${i} é um número primo.`);
        } else {
            console.log(`${i} não é um número primo.`);
        }
    }
}