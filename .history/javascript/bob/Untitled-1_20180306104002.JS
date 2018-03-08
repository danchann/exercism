var str = 'Tom-ay-to, tom-aaaah-to.';
var result;

// empty str
if (str === '') { 
    result = 'Fine. Be that way!';
//has a question mark
} else if ((/\?/).test(str)) { 
    result = 'Sure.';
//has a question mark and number
} else if ((/\?/).test(str) && ((/[0-9]/).test(str))) {
    result = 'Sure.';
//has a question mark and capital letters
} else if ((/\?/).test(str) && ((/[^a-z]/).test(str))) {
    result = 'Whoa, chill out!.';
//has a number
} else if ((/\d/).test(str)) {
    result = 'Whatever.';
//gibberish (no spaces)    
} else if ((/[\x20]/).test(str)) {
    result = 'Whoa, chill out!';
//all capital letters
} else if ((/[^a-z0-9]/).test(str)) {
    result = 'Whoa, chill out!';
} else {
    result = 'Whatever.';
}
