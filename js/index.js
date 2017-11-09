const number = Number(prompt('Enter the number in the Fibonacci :'));

function fibArr(number) {
    let fib = [1, 1];
    for(let i = 2; i <= number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib[number-1];
}

function fibVariable(number) {
    let a = 1, b = 1;
    for (let i = 2; i < number; i++) {
        let x = a + b;
        a = b
        b = x;
    }
    return b;
}

function fibRecurs(i) {
    return (i <= 1) ? i : fibRecurs(i - 1) + fibRecurs(i - 2);
}

function fibBine(n) {
    const f = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(f, n) / Math.sqrt(5));
}

const resArr = fibArr(number);
const resVariable = fibVariable(number);
const resRecurs = fibRecurs(number);
const resBine = fibBine(number);
document.write('Fibonacci(array) : ' + resArr + 
               '<br>Fibonacci(variable) : ' + resVariable + 
               '<br>Fibonacci(Recursion) : ' + resRecurs + 
               '<br>Fibonacci(Bine) : ' + resBine);