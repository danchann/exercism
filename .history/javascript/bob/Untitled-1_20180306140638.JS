var str = 'This is a statement ending with whitespace      ';
var result;

// empty str
if (str === '' || (/x20(?=\x20)/).test(str) || (/[\t]/).test(str)) { 
    result = 'Fine. Be that way!';
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
//has a number
} else if ((/\d/).test(str)) {
    result = 'Whatever.';

} else {
    result = 'Whatever.';
}
