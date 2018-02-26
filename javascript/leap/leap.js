//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function () {
//
// YOUR CODE GOES HERE
Year.prototype.year = function (year) {
    
    
}
//
};

Year.prototype.isLeap = function () {
//
// YOUR CODE GOES HERE
    if (year % 1 == 0 || year % 100 == 0 || year % 400 == 0) {
        year.isLeap() = true;
    } else {
        year.isLeap() = false;
    }
//
};

module.exports = Year;
