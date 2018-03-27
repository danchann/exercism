
//module.exports = function(input){
var Matrix = function(input){

	this.columns=[];
	this.rows=input.split('\n').map(function(row){
		return row.split(' ')
				.reduce(function(prev, curr){
						prev.push(+curr);
						return prev;
					    },[]);
	});
	for (var ci=0;ci<this.rows.length;ci++){
		this.columns[ci]=[];
		this.rows.forEach(function(row){
			this.columns[ci].push(row[ci]);
		}.bind(this));
	};
};

//new Matrix('1 2\n10 20').rows[0]
new Matrix('9 8 7\n19 18 17').rows[1]
//new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]