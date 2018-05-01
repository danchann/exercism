// submitted in JavaScript by  Pappa 9 March 2018 at 4:24 HKT
// this is slow
class PerfectNumbers {

    classify(n) {
        if (n < 1) {
            return 'Classification is only possible for natural numbers.';
        }

        const als = [...Array(Math.floor(n / 2) + 1).keys()]
            .filter(x => n % x === 0)
            .reduce((acc, v) => acc + v, 0);

        if (als === n) {
            return 'perfect';
        }
        if (als > n) {
            return 'abundant';
        }
        return 'deficient';
    }

}

module.exports = PerfectNumbers;