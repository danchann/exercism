module.exports = function Triangle(numrow) {
    this.rows = [];
    this.rows[0] = [1];
    this.lastRow = []

    for (var x=1; x < numrow; x++) {
        this.rows[x] = [1]
        for (var y=1; y < (this.rows[x-1].length+1); y++){
            if (!this.rows[x-1][y]) {
                this.rows[x][y] = 1
            } else {
            this.rows[x].push(this.rows[x-1][y] + this.rows[x-1][y-1])
            }   
        }
    }
    this.lastRow = this.rows[x-1];
    console.log(this.rows.forEach(function(e){console.log(e)}))

}