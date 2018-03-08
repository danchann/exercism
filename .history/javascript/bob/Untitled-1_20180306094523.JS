str = 'ASDAGAFG';







switch (str) {
    case ((str === '') || {}).input: // empty str
        result = 'Fine. Be that way!';
    case (str.match(/?/) || {}).input: //has a question mark
        result = 'Calm down, I know what I\'m doing!';
    case (str.match(/?/) || {}).input: //has a question mark
        result = 'Sure.';
    case (str.match(/?/) && (str.match(/[A-Z]/)) || {}).input: //has a question mark and capital
        result = 'Sure.';
    case (str.match(/\d/) || {}).input: //has a number
        result = 'Whoa, chill out!';
    case (str.match(!/[\x20]/) || {}).input: //gibberish (no spaces)
        result = 'Whoa, chill out!';
    case (str.match(/[^a-z]/) || {}).input: //capital letters
        result = 'Whoa, chill out!';
    default: result = 'Whatever.'
    
    
        
}