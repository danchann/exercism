
var input = '101'
var newArr = []

for(var x in input) {
    var y = input.length - [x] -1;
    newArr.push((input[x]) * (2**y));
    
}




