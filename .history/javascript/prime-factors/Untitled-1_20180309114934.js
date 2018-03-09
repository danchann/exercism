input = 901255

var result = []
var x = 2;
do {
    if (input % x !== 0) {
        x++;
        continue;
    } else { 
        input  = input / x
        result.push(x)
    }
} while (input > 1);
console.log(result)

