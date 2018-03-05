function Pangram(input) {
    this.input = input;


    
};

Pangram.prototype.isPangram = function (input) {
    // if empty return false
    if (this.input === ''){
            return false;
        }
    // checks if all lower case    
    if ((/^[a-z]+$/g).test(input)) {
        return true;    
    }
    // checks if contains a-z
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (var x in alphabet) {
        if (this.input.search(alphabet[x]) == -1) {
            return false
        }
    }
        
}

module.exports = Pangram;