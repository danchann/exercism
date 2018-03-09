function Binary(){
    this.input = input;
    return input.toDecimal();
};



Binary.prototype.toDecimal = function() {
    var newArr = []

    for(var x in this.input) {
        var y = input.length - [x] -1;
        newArr.push((this.input[x]) * (2**y));
        
    }
    var sum = newArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    
    return sum;

}

module.exports = Binary;