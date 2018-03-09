
var input = '101'
var arr = input.split('');
var newArr = []

for(var x in arr) {
    var y = arr.length - [x] 
    newArr.push(arr[x] * 2**y);
    var sum = newArr.reduce(reducer)
    console.log(sum)
}




/*
0 1 2 3 4
4 3 2 1 0
*/