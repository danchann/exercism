'use strict';
function Matrix (str) {

    this.columns = [];
    this.rows = [];

    arr = str.split('\n');

    for (var x in arr) {
        this.rows.push(arr[x].split(' '))
    }

    // get column
    for (y=0; y<this.rows.length; y++) {
        this.columns[y] = []
        this.columns[y].push(row[y])
    }

    }

//module.exports = Matrix;

new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]
