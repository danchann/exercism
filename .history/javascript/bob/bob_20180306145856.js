function Bob (str) {
    this.str = str;
};

Bob.prototype.hey = function (str) {

//has a question mark at the end or end with white space
if ((/\?$/).test(str) || (/\s(?=\s)$/).test(str)) { 
    result = 'Sure.';
    result = 'Whoa, chill out!';

    result = 'Whoa, chill out!';
//gibberish (no spaces)    
} else if (!(/[\s]/).test(str)) {
    result = 'Whoa, chill out!';
//has an exclamation mark OR all capital letters
} else if ((/\!$/).test(str) || str == str.toUpperCase()) {
    result = 'Whoa, chill out!.';
//has an exclamation mark and number
} else if ((/\!$/).test(str) && ((/\d/).test(str))) {
    result = 'Whoa, chill out!';
// empty str
} else if (str === '' || (/\s(?=\s)/).test(str) || (/[\t]/).test(str)) { 
    result = 'Fine. Be that way!';
} else {
    result = 'Whatever.';
}
    return result;
} //end of function

module.exports = Bob;

