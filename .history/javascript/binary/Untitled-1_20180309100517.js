
var input = '101'
var newArr = []

for(var x in input) {
    var y = input.length - [x] 
    newArr.push(arr[x] * 2**y);
    var sum = newArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
}




/*
0 1 2 3 4
4 3 2 1 0
*/