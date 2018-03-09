function primeFactors() {
    //this.input = input;

}

primeFactors.prototype.for = function(input) {

var result = []
var x = 2;

do {
    if (this.input % x !== 0) {
        x++;
        continue;
    } else { 
        this.input  = this.input / x
        result.push(x)
    }
} while (this.input > 1);
return result
}


module.exports = primeFactors;