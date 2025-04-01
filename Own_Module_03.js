// own module chkPrime to check prime nos from 1 to 50
const chkPrime = () => {
    var primes = []
    for (i = 2; i <= 50; i++) {
        let isPrime = true;
        for (j = 2; j < i; j++) {
            if (i % j == 0 && i != 2) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    return primes;
}

module.exports.chkPrime = chkPrime;