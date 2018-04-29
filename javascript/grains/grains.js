var BigInt = require('./big-integer');

class Grains {
  square(num) {
    let result="1";
    if (num == 1) return result;
    for (var x=1; x<num; x++) {
      result = BigInt(result).multiply(2).toString();
    }
    return result;
  }
  total() {
    let result =1, sq = 1;
    for (var x=1; x<64; x++) {
      sq = BigInt(sq).multiply(2).toString();
      result = BigInt(result).add(BigInt(sq));
    }
  return result.toString();
  }
}

module.exports = Grains;
