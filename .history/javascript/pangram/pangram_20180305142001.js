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
    if (!(/[a-z]x+?$/g).test(input)) {
        return false;
    }
        
}

module.exports = Pangram;