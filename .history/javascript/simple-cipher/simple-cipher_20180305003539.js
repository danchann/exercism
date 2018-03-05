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
            cipher.key = results.join('')
            return cipher.key;
    };

Cipher.prototype.decode = function (key) {    
   
    var results = key.replace(/[a-z]/gi, function(c) {
        switch (c) {
            case 'a': return 'x';
            case 'b': return 'y';
            case 'c': return 'z';
            default:  return String.fromCharCode(-3 + c.charCodeAt(0));
          }
    });
        return results;
};

};
module.exports = Cipher;