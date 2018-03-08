str = 'ASDAGAFG';







switch (str) {
    case (str.match(/[A-Z]/) || {}).input: //capital letters
        return 'Whoa, chill out!';
    case (str.match(!/[\x20]/) || {}).input: //gibberish (no spaces)
        return 'Whoa, chill out!';
    case (str.match(/?/) || {}).input: //has a question mark
        return 'Whoa, chill out!';
    case (str.match(/\d/) || {}).input: //has a number
        return 'Whoa, chill out!';
        
}