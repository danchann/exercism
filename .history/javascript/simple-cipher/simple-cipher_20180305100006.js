var alphabet = "abcdefghijklmnopqrstuvwxyz";

function Cipher(key) {
    
    if (key === '') {
        throw('Bad key');
    }
    if (!(/^[a-z]+$/g).test(key)) {
         throw ('Only lowercase letters accepted');    
    }
    this.key = key || generateRandomKey();
};
   
Cipher.prototype.encode = function (input) {    
        var arr = input.split('')
        var results =[];
        for (x in input) {
            var newIndex = alphabet.indexOf(arr[x]) + alphabet.indexOf(this.key[x])
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
    for (var x in arr) {
        var output = key.replace(/[a-z]/gi, function(c) {
            switch (c) {
                case 'a': results.push('x');break;
                case 'b': results.push('y');break;
                case 'c': results.push('z');break;
                default:  results.push(String.fromCharCode(-3 + c.charCodeAt(0)));break;
            } 
        });
    }
            return results.join('');
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