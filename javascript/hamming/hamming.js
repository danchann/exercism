class Hamming {
  constructor () {
  }

  compute(a, b) {
    if(a.length !== b.length) throw new Error('DNA strands must be of equal length.')
    let counter = 0;
    a = a.split('');
    b = b.split('');
    for (let x in a) {
      a[x] == b[x] ? "": counter++;
    }
    return counter;
  }
}

module.exports = Hamming;