var str = 'ASDAGAFG';
var result;

if ((/[^a-z0-9]/).test(str)) {
    result = true;
}


switch (str) {
    case ((str === '') || {}).input: // empty str
        result = 'Fine. Be that way!';
    case ((/\?/).test(str) || {}).input: //has a question mark
        result = 'Calm down, I know what I\'m doing!';
    case ((/\?/).test(str) && ((/[0-9]/).test(str))  || {}).input: //has a question mark
        result = 'Sure.';
    case ((/\?/).test(str) && ((/[^a-z]/).test(str)) || {}).input: //has a question mark and capital
        result = 'Whoa, chill out!.';
    case ((/\d/).test(str) || {}).input: //has a number
        result = 'Whoa, chill out!';
    case ((/[\x20]/).test(str) == false || {}).input: //gibberish (no spaces)
        result = 'Whoa, chill out!';
    case ((/[^a-z0-9]/).test(str): //all capital letters
        result = 'Whoa, chill out!';
    default: result = 'Whatever.' 
        
}

console.log(result)