input = 6

var result = []
var x = 2;

for (x = 2; input % x == 0) {

    do {
        input  = input / x
        x++
        result.push(x)
    }   
}

/*
input = 6/2 = 3 //push x, 2
3 = 3 / 3 = 1   //push x, 3

