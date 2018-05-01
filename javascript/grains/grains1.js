// submitted in JavaScript by  shawn137080 26 April 2018 at 0:11 HKT

var BigInt = require('./big-integer.js');

module.exports = function () {
	return {
		// a = r^(n-1)
        square: function (n) { return BigInt(2).pow(n - 1).toString() },
        //t = r^0 + r^1 + r^2 .... r^(n-1)+ r^(n)
        //t =  (1-r^n)/(1-r)
        //t = (1-2^64)/(-1)
		total: function() { return BigInt(2).pow(64).minus(1).toString() },
    }
}