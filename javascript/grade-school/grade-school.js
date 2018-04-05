module.exports = function(){
	var db={};
	return {
		add: function(name, grade){
			db[grade] ? db[grade].push(name) : db[grade]=[name];
			db[grade].sort();
		},
		grade: function(grade){
			return db[grade] ? (db[grade]) : [];
		},
		roster: function(){
			return db;
		}
	}
}

