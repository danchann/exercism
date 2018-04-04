function SecretHandshake(dec) {

    var result = [];
    // dec = parseInt(dec);
    if (isNaN(dec)) {
        throw ('Handshake must be a number')
    } else {
        bin = (dec >>> 0).toString(2);
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
        return result;
    }
}

SecretHandshake("L");
