function Pangram(input) {
    this.input = input;  
};

Pangram.prototype.isPangram = function (input) {
    var result;
    // if empty return false
    if (this.input === ''){
            return false;
        }else {
            // checks if contains a-z
            var alphabet = 'abcdefghijklmnopqrstuvwxyz';
            for (var x in alphabet) {
                if ((this.input.search(alphabet[x])) == -1) {
                    return false;
                }
            }
        }
            // checks if all lower case                
            if ((/^[a-z]+$/g).test(input)) {
                return  true;
            // check for mixed case and puntuation                
            } else if ((/^[a-z0-9.,!?-_\x20-\x7E]*$/gi).test(input)){
                return true;
            } else {
                return true;
            }               
                
} //end of function

module.exports = Pangram;