function Pangram(input) {
    this.input = input;  
};

Pangram.prototype.isPangram = function (input) {
    var result;
    // if empty return false
    if (this.input === ''){
            return false;
        } else {
            
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        if (/\d/.test(this.input)) { //check for any digits
            return true;
        } else if ((/[-A-Z.,!?_"\x20-\x7E]+/g).test(this.input)) { // check for puntuation and non
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
                
} //end of function

module.exports = Pangram;