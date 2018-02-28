var Cipher = function (input) {

    this.cipher = input;
  
    if (!input.match(/^[a-z]+$/g)) {
         throw new Error('Only lowercase letters accepted');    
    } 

};
   

Cipher.prototype.encode = function (input) {    

    
};

Cipher.prototype.decode = function (input) {    


    
};

module.exports = DnaTranscriber;