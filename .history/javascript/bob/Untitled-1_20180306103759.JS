var str = '';
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
    
}


    case ((/\?/).test(str) && ((/[0-9]/).test(str))  || {}).input: 
        result = 'Sure.';
    case ((/\?/).test(str) && ((/[^a-z]/).test(str)) || {}).input: 
        result = 'Whoa, chill out!.';
    case ((/\d/).test(str) || {}).input: 
        result = 'Whoa, chill out!';
    case ((/[\x20]/).test(str) == false || {}).input: //gibberish (no spaces)
        result = 'Whoa, chill out!';
    case ((/[^a-z0-9]/).test(str)): //all capital letters
        result = 'Whoa, chill out!';
    default: result = 'Whatever.' 
        
}

console.log(result)