function SecretHandshake(dec) {
    if (isNaN(dec)) {
        throw new Error('Handshake must be a number')
    } 
    this.dec = dec;
    this.bin = (dec >>> 0).toString(2);
}

SecretHandshake.prototype.commands = function() {
    var result = [];
    bin = this.bin    
        for (x=bin.length-1; x>=0; x--) {
            if (bin[x] == 1) {
                switch (bin.length - (x+1)) {
                    case (0): result.push("wink"); break;
                    case (1): result.push("double blink"); break;
                    case (2): result.push("close your eyes"); break;
                    case (3): result.push("jump"); break;
                    case (4): result = result.reverse(); break;  
                }    
            }
        }
        return result 
    
}

module.exports = SecretHandshake;