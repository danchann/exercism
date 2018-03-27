module.exports = function Matrix(str) {

    this.columns = [];
    this.rows = [];

    arr = str.split('\n');

    // get rows and map them as numbers
    for (var x in arr) {
        this.rows.push(arr[x].split(' ').map(Number))
    }

    // get column and turn into arrays
    var x = 0;
    for (var y = 0; y < this.rows[x].length; y++) {
        this.columns[y] = []
        for (x = 0; x < this.rows.length; x++) {
            this.columns[y].push(this.rows[x][y])
        }
        x = 0;
    }
}