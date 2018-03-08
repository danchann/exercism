function Bob () {
};

Bob.prototype.hey = function (str) {

// empty str
if (str === '' || (/x20(?=\x20)/).test(str) || (/[\t]/).test(str)) { 
    result = 'Fine. Be that way!';
//has a question mark
} else if ((/\?$/).test(str)) { 
    result = 'Sure.';
//has a question mark and number
} else if ((/\?/).test(str) && ((/[0-9]/).test(str))) {
    result = 'Sure.';
//has a question mark and capital letters
} else if ((/\?/).test(str) && ((/[^a-z]/).test(str))) {
    result = 'Whoa, chill out!.';
//has an exclamation mark and number
} else if ((/\!/).test(str) && ((/\d/).test(str))) {
    result = 'Whoa, chill out!';
//has a number
} else if ((/\d/).test(str)) {
    result = 'Whatever.';
//gibberish (no spaces)    
} else if (!(/[\x20]/).test(str)) {
    result = 'Whoa, chill out!';
//all capital letters
} else if (str == str.toUpperCase()) {
    result = 'Whoa, chill out!';
} else {
    result = 'Whatever.';
}
    return result;
} //end of function

module.exports = Bob;

