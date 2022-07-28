function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    let sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++)
        if (num % i === 0) return false;
    return true;
}

function getPrimes(start, finish) {
    if (start == 0 && finish == 0) {
        return [];
    } else {
        let numArray = [start, finish];
        let number = numArray.sort(function(a, b) {
            return a - b;
        });
        let primes = [];

        for (let i = number[0]; i <= number[1]; i++) {
            function isPrime(num) {
                if (num <= 1) return false;
                if (num === 2) return true;

                let sqrt = Math.sqrt(num);

                for (let i = 2; i <= sqrt; i++)
                    if (num % i === 0) return false;
                return true;
            }
            let amIPrime = isPrime(i);
            if (amIPrime == true) {
                primes.push(i);
                continue;
            } else {
                continue;
            }

        }
        return primes;
    }
}