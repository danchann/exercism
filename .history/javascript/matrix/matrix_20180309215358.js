str = '89 1903 3\n18 3 1\n9 4 800'
var mx = []



arr = str.split('\n')

for (var x in arr) {
    mx.push(arr[x].split(' '))
}
for (y=0; in mx) {
    console.log(mx[y])
}