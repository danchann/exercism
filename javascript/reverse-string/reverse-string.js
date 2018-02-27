var reverseString = function (str) {
    this.actual = str;

    return str.split("").reverse().join("");

};

module.exports = reverseString;