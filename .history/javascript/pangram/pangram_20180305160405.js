function Pangram(input) {
    this.input = input;


    
};

Pangram.prototype.isPangram = function (input) {
    // if empty return false
    if (this.input === ''){
            return false;
        }
        // checks if all lower case    
        else if (!(/^[a-z]+$/g).test(input)) {
            return false;
        // check for mixed case and puntuation
        } else if () {

        }    
        
        // checks if contains a-z
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
            for (var x in alphabet) {
                if ((this.input.search(alphabet[x])) == -1) {
                    return false
                } else {}
                return true;
            }
        
        
}

module.exports = Pangram;