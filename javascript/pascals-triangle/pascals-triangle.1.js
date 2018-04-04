function Triangle(numrow) {
    var rows = [];
    rows[0] = [1];

    for (var x=1; x < numrow; x++) {
        rows[x] = [1]
        for (var y=1; y < (rows[x-1].length+1); y++){
            if (!rows[x-1][y]) {
                rows[x][y] = 1
            } else {
            rows[x].push(rows[x-1][y] + rows[x-1][y-1])
            }   
        }
    }
    var lastRow = rows[x-1]
    console.log(rows.forEach(function(e){console.log(e)}))
    console.log("Last Row: " + lastRow)
}

Triangle(20)