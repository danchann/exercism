input = 6

var result = []
var x = 2;
do {
    if (input % x !== 0;) { 
        continue;
    {  
        input  = input / x
        x++;
        result.push(x)
    }
} while (input > 1);
/*
input = 6/2 = 3 //push x, 2
3 = 3 / 3 = 1   //push x, 3
*/
