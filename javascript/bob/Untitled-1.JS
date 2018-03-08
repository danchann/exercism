var str = '4?';
var result;

//has a question mark at the end or end with white space
//if ((/\?$/).test(str) || (/\s(?<=\s)$/).test(str)) { 
(str.endsWith('?') || str.endsWith(' ')) ? (result = 'Sure.') : "";
//all capital letters and no numbers
if (str == str.toUpperCase() && (!(/\d/).test(str))) {
    result = 'Whoa, chill out!';
//gibberish (no spaces)    
} else if (str === '' || (/\s(?=\s)/).test(str) || (/[\t]/).test(str)) { 
    result = 'Fine. Be that way!';
} else if (!(/[\x20]/).test(str)) {
    result = 'Whoa, chill out!';
//has an exclamation mark OR all capital letters
} else if ((/\!$/).test(str) && str == str.toUpperCase()) {
    result = 'Whoa, chill out!.';
//has an exclamation mark and number
} else if ((/\!$/).test(str) && ((/\d/).test(str))) {
    result = 'Whoa, chill out!';
// empty str

} else {
    result = 'Whatever.';
}
