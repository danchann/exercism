
var reg = /[a-z]/g
const input = '7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog';
this.input = input;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        if ((/[0-9]+$/g).test(this.input)) {
            return true;
        } else {   
            for (var x in alphabet) {
                if ((this.input.search(alphabet[x])) == -1) {
                        return false;
                }
            }        
                if ((/^[a-z]+$/g).test(input)) { // checks if all lower case
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