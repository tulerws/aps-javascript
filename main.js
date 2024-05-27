// O NOME DA DISCIPLINA, CODIGO DA TURMA E O NOME E MATRICULA ESTÁ NO README.MD DO REPOSITORIO

// Função para verificar se um número é primo
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {         //sobre a função math.sqrt eu procurei como usar ela 
        if (num % i === 0) {                            //na internet pra conseguir usar direito no codigo
            return false;
        }
    }
    return true;
}

// Encontra os 10 maiores números primos a partir de um número dado
function findLargestPrimes() {
    const input = parseInt(prompt("Digite um número:"));
    const largestPrimes = [];

    for (let num = input; largestPrimes.length < 10; num--) {
        if (isPrime(num)) {
            largestPrimes.push(num);
        }
    }

    console.log("Os 10 maiores números primos a partir de", input, "são:"); //retorno dos 10 maiores primos
    console.log(largestPrimes);
}

// Verifica se todos os números positivos até o valor inserido são primos
function verificarPrimos() {
    const userInput = parseInt(prompt("Digite um número positivo:"));
    if (userInput <= 0) {
        console.log("Por favor, digite um número positivo válido."); //se for menor ou igual a zero fiz retornar um erro
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

// Chama a função para encontrar os 10 maiores números primos
findLargestPrimes();