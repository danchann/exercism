function Pangram(input) {
    this.input = input;


    
};

Pangram.prototype.isPangram = function (input) {
    if (this.input === ''){
            return false;
        }
    if ((/^[a-z]+$/g).test(input)) {
        return true;    
    }
    if (g).test(input)

}

module.exports = Pangram;