
var reg = /[a-z]/g
const input = 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.';
this.input = input;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        if (/\d/.test(this.input)) {
            return true;
        } else if ((/^[a-zA-Z0-9.,!?-_"\x20-\x7E]*$/gi).test(this.input)) { // check for mixed case and puntuation
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