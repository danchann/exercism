function Matrix (str) {

    this.str = str

var mx = [], co = []

arr = str.split('\n')

for (var x in arr) {
    mx.push(arr[x].split(' '))
}

for (y=0; y<mx.length; y++) {
    result.push(mx[y][1])
}

}

module.exports = Matrix;

