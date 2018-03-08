
var reg = /[a-z]/g
const input = 'the 1 quick brown fox jumps over the 2 lazy dogs';
this.input = input;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // if empty return false
    if (this.input === ''){
            return false;
    } else {
    
        if (/\d(?=[a-z])/.test(this.input)) { //check for any digits
            return false;
        } else if ((/[^\x20-\x7E]+/g).test(this.input)) { // check for puntuation and non-ascii
            return true;
        }      
        // checks for missing characters    
        for (var x in alphabet) {
                if ((this.input.search(alphabet[x])) == -1) {
                        return false;
                }
            }        
                if ((/^[a-z]+$/g).test(input)) { // checks if all lower case
                    return true;       
                }        
    }            
