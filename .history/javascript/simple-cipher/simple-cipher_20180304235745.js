function Cipher(key) {
    
    if (key === '') {
        throw('Bad key');
    }
    if ((/^[a-z]+$/g).test(key)) {
         throw ('Only lowercase letters accepted');    
    }
    this.key = key;

   

Cipher.prototype.encode = function (key) {    
    var results = '';
    results = key.replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'x': return 'a';
          case 'y': return 'b';
          case 'z': return 'c';
          default:  return String.fromCharCode(3 + c.charCodeAt(0));
        }
    });
        return results;
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