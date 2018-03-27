module.exports = function Matrix (str) {

    this.columns = [];
    this.rows = [];

    arr = str.split('\n');
    // get rows
    for (var x in arr) {
        this.rows.push(arr[x].split(' ').map(Number))
    }
    // get column and turn into arrays
    var x=0;
    for (var y=0; y<this.rows[x].length; y++) {
        this.columns[y] = []
        for (x=0; x<this.rows.length; x++) {
            this.columns[y].push(this.rows[x][y])
        }
        x=0;    
    }
    }

//module.exports = Matrix;
//new Matrix('1 2\n10 20').rows[0]
//new Matrix('9 8 7\n19 18 17').rows[1]
//new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]
