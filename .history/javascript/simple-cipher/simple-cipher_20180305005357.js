function Cipher(key) {
    
    if (key === '') {
        throw('Bad key');
    }
    if (!(/^[a-z]+$/g).test(key)) {
         throw ('Only lowercase letters accepted');    
    }
    this.key = key;
};
   

Cipher.prototype.encode = function (input) {    
        var arr = input.split('')
        var results =[];
    for (var x in arr) {    
        var ouput = arr[x].replace(/[a-z]/gi, function(c) {
            switch (c) {
              case 'x': results.push('a');break;
              case 'y': results.push('b');break;
              case 'z': results.push('c');break;
              default:  results.push(String.fromCharCode(3 + c.charCodeAt(0)));break;
            } 
        });
    }         
            return results.join('');
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
    var i,
}

module.exports = Cipher;