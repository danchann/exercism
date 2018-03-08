function Pangram(input) {
    this.input = input;  
};

Pangram.prototype.isPangram = function (input) {
    var result;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // if empty return false
    if (this.input === ''){
            return false;
    } else {
    
        if (/\d(?=[a-z])/.test(this.input)) { //check missing letters replaced by numbers
            return false;
        } else if (/\d/.test(this.input)) { // check for digits
            return true;
        } else if ((/[\x21-\x2F]+/g).test(this.input)) { // check for puntuation
            return true;
        } else if ((/[^\x20-\x7E]+/g).test(this.input)) { // check non-ascii
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
} //end of function

module.exports = Pangram;