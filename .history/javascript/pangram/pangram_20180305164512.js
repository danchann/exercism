function Pangram(input) {
    this.input = input;


    
};

Pangram.prototype.isPangram = function (input) {
    var result;
    // if empty return false
    if (this.input === ''){
            return false;
        // checks if all lower case                
        } else if (!(/^[a-z]+$/g).test(input)) {
            result = false;
        // check for mixed case and puntuation
        } else if ((/^[a-z0-9.,!?-_\x20-\x7E]*$/gi).test(input)){
            result = true;
        } else {
        // checks if contains a-z
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (var x in alphabet) {
            if ((this.input.search(alphabet[x])) == -1) {
                result = false
            }  else {
                
            }
        }
        }
            
        return result
        
} //end of function

module.exports = Pangram;