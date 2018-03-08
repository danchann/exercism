var str = 'This is a statement ending with whitespace      ';
var result;

// empty str
if (str === '' || (/x20(?=\x20)/).test(str) || (/[\t]/).test(str)) { 
    result = 'Fine. Be that way!';
//has a question mark at the end or end with white space
} else if ((/\?$/).test(str) && (/\s(?=\s)$/).test(str)) { 
    result = 'Sure.';
//has a question mark and number
//has a question mark and capital letters
} else if ((/\?$/).test(str) && ((/[^a-z]/).test(str))) {
    result = 'Whoa, chill out!.';
//has an exclamation mark and number
} else if ((/\!$/).test(str) && ((/\d/).test(str))) {
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
