input = 6

var result = []
var x = 2;

for (x = 2; input % x == 0) {
        input  = input / x
        x++
        result.push(x)
}

/*
6/2