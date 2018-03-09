function Binary(input){
    this.input = input
};



Binary.prototype.toDecimal = function() {
    var newArr = []
if (this.input)
    for(var x in this.input) {
        var y = this.input.length - [x] -1;
        newArr.push((this.input[x]) * (2**y));
        
    }
    var sum = newArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    
    return sum;

}

module.exports = Binary;