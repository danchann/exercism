function Cipher(key) {
    
    if (key === '') {
        throw('Bad key');
    }
    if (!(/^[a-z]+$/g).test(key)) {
         throw ('Only lowercase letters accepted');    
    }
    this.key = key;

   

Cipher.prototype.encode = function (key) {    
        var arr = key.split('')
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
            key = results.join('')
            return key;
    };

Cipher.prototype.decode = function (key) {    
        var arr = key.split('')
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
        return results;
};

};
module.exports = Cipher;