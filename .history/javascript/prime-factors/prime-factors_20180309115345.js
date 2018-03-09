function primeFactors(input) {
    this.input = input;

}

primeFactors.prototype.for = function() {

var result = []
var x = 2;

do {
    if (this.input % x !== 0) {
        x++;
        continue;
    } else { 
        this.input  = input / x
        result.push(x)
    }
} while (input > 1);
return result
}


module.exports = primeFactors;