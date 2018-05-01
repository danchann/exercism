class PerfectNumbers {
  classify (number) {
    if (number < 1) return 'Classification is only possible for natural numbers.';
    if (number == 1) return 'deficient';

    let sum = 1;

    for (var x = 2; x < number; x++) {
      if (number % x == 0) {
        sum += x;
        if (sum == number) {
          return 'perfect';
        }
      }
    }
    if (sum > number) {
      return 'abundant';
    } else if (sum < number) {
      return 'deficient';
    }
  }
}

module.exports = PerfectNumbers;