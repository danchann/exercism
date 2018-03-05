
var reg = /[a-z]/g
const input = 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.';
this.input = input;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        if (/\d/.test(this.input)) {
            return true;
        } else if ((/[-A-Z.,!?_"\x20-\x7E]+/g).test(this.input)) { // check for mixed case and puntuation
            return true;
        }      
            for (var x in alphabet) {
                if ((this.input.search(alphabet[x])) == -1) {
                        return false;
                }
            }        
                if ((/^[a-z]+$/g).test(input)) { // checks if all lower case
                    return true; 
                
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