function Cipher(key) {
    
    if (key === '') {
        throw('Bad key');
    }
    if (!(/^[a-z]+$/g).test(key)) {
         throw ('Only lowercase letters accepted');    
    }
};
   

Cipher.prototype.encode = function (key) {    
    var result = []; 
    for (var x in key) {
            if (key[x] == 'c') {
                result.push('g');
            } else if (key[x] == 'g') {
                result.push('c');
            } else if (key[x] == 't') {
                result.push('a');
            } else if (key[x] == 'a') {
                result.push('u');
            }  else {
                throw new Error('Invalid input')
                break;
            }
    }
    Cipher.key = result.join('');
    return Cipher.key;
};

Cipher.prototype.decode = function () {    


    
};

module.exports = Cipher;