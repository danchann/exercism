function Bob () {
    this.str str};

Bob.prototype.hey = function (str) {

//has a question mark at the end or end with white space
if ((/\?$/).test(str) && (/\s(?=\s)$/).test(str)) { 
    result = 'Sure.';
//all capital letters
} else if (str == str.toUpperCase()) {
    result = 'Whoa, chill out!';
//gibberish (no spaces)    
} else if (!(/[\x20]/).test(str)) {
    result = 'Whoa, chill out!';
    //has a exclamation mark OR all capital letters
} else if ((/\!$/).test(str) || ((/[^a-z]/).test(str))) {
    result = 'Whoa, chill out!.';
//has an exclamation mark and number
} else if ((/\!$/).test(str) && ((/\d/).test(str))) {
    result = 'Whoa, chill out!';
// empty str
} else if (str === '' || (/x20(?=\x20)/).test(str) || (/[\t]/).test(str)) { 
    result = 'Fine. Be that way!';
} else {
    result = 'Whatever.';
}
} //end of function

module.exports = Bob;

