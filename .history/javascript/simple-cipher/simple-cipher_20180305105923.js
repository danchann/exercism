var alphabet = "abcdefghijklmnopqrstuvwxyz";

function Cipher(key) {
    
    if (key === '') {
        throw new Error('Bad key');
    }
    if (!(/^[a-z]+$/g).test(key)) {
         throw new Error('Bad key');    
    }
    this.key = key || generateRandomKey();
};
   
Cipher.prototype.encode = function (input) {    
        var arr = input.split('')
        var results =[];
        for (x in input) {
            var keyIndex = x % key.length;
            var newIndex = alphabet.indexOf(arr[x]) + 
        alphabet.indexOf(key[keyIndex]);
            if (newIndex >= alphabet.length) {
                newIndex -= alphabet.length; 
            }
              results.push(alphabet[newIndex]);
            }       
            return results.join('')
    };

Cipher.prototype.decode = function (cipher) {    
        var arr = cipher.split('')
        var results =[];
        for (x in cipher) {
            var newIndex = alphabet.indexOf(arr[x]) - alphabet.indexOf(this.key[x])
            if (newIndex < 0) {
                newIndex += alphabet.length; 
            }
              results.push(alphabet[newIndex]);
            }       
            return results.join('')
};

function generateRandomKey() {
    
    var i;
    var randomKey = '';
    for (i=0; i < 100; i++) {
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        randomKey += getRandomLetter;
    }
    return randomKey;
}

module.exports = Cipher;