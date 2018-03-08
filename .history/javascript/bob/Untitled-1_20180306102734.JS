var str = '';
var result;

if ((/[^a-z0-9]/).test(str)) {
    result = true;
}

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

switch (str) {
    case (str === ''): // empty str
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
    case ((/[^a-z0-9]/).test(str)): //all capital letters
        result = 'Whoa, chill out!';
    default: result = 'Whatever.' 
        
}

console.log(result)