
var reg = /[a-z]/g
const input = 'bdefghijklmnopqrstuvwxyz';
var this.input = input;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
            for (var x in alphabet) {
                if ((this.input.search(alphabet[x])) == -1) {
                    return false;
                } else if ((/^[a-z]+$/g).test(input)) { // checks if all lower case
                    return true; 
                } else if ((/^[a-z0-9.,!?-_"\x20-\x7E]*$/gi).test(input)) { // check for mixed case and puntuation
                    return true;
                }
            }
    







/*
for (var x in alphabet) {
    var letter = alphabet[x];
    if (().test(input)) {
        return true
    } else {
        return false
    }



}
*/