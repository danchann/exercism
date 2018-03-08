var str = 'ASDAGAFG';
var result;

switch (str) {
    case ((str === '') || {}).input: // empty str
        result = 'Fine. Be that way!';
    case ((/\?/).test(str) || {}).input: //has a question mark
        result = 'Calm down, I know what I\'m doing!';
    case ((/\?/).test(str) && (str.test(/[0-9]/))  || {}).input: //has a question mark
        result = 'Sure.';
    case (str.test(/\?/).test(str) && (str.test(/[^a-z]/)) || {}).input: //has a question mark and capital
        result = 'Whoa, chill out!.';
    case (str.test(/\d/).test(str) || {}).input: //has a number
        result = 'Whoa, chill out!';
    case (str.test(!/[\x20]/) || {}).input: //gibberish (no spaces)
        result = 'Whoa, chill out!';
    case (str.test(/[^a-z0-9]/) || {}).input: //all capital letters
        result = 'Whoa, chill out!';
    default: result = 'Whatever.' 
        
}

console.log(result)