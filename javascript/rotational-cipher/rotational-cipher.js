function RotationalCipher (input, number) {
  this.input = input;
  this.number = number
}

RotationalCipher.prototype.rotate = function (input, number) {
  expected = [];
for (var x in input) {
  if (/[A-Z]/g.test(input[x])) {
    if (input.charCodeAt(x) + number <= 90) {
      rotate = (input.charCodeAt(x) + number);
    } else {
      rotate = (input.charCodeAt(x) + number)-26;
    }
    convert = String.fromCharCode(rotate);
    expected.push(convert);
  } else if (/[a-z]/g.test(input[x])) {
    if (input.charCodeAt(x) + number <= 122) {
      rotate = (input.charCodeAt(x) + number);
    } else {
      rotate = (input.charCodeAt(x) + number)-26;
    }
    convert = String.fromCharCode(rotate);
    expected.push(convert);
  } else {
    expected.push(input[x]);
  }
}
  return expected.join('');
}

module.exports = RotationalCipher;