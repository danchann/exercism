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
            
        
        if (/\d/.test(this.input)) { //check for any digits
            return true;
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
} //end of function

module.exports = Pangram;