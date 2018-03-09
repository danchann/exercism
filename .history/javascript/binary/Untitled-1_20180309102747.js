
//var input = '00011111'
function Binary(input){
    this.input = input;
    
};

Binary.prototype.toDecimal = function(input) {
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

var xyz = new Binary('11').toDecimal()