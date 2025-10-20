let n = 7, isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) isPrime = false;
}

console.log(isPrime ? "prime Number" : "Not A Prime Number")