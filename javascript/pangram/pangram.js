function Pangram(input) {
    this.input = input;  
};

Pangram.prototype.isPangram = function (input) {
    var result;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // if empty return false
    if (this.input === ''){
            return false;
         // check for mixed case and puntuation   
        
        }else {
            // checks if contains a-z
            var alphabet = 'abcdefghijklmnopqrstuvwxyz';
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