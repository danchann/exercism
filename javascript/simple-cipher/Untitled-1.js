function testing(input) {

  this.cipher = input;
  
    if (!input.match(/^[a-z]+$/g)) {
         throw new Error('Only lowercase letters accepted');    
    } 
    
    var results = input.replace(/[a-z]/gi, function(c) {
      switch (c) {
        case 'x': return 'a';
        case 'y': return 'b';
        case 'z': return 'c';
        default:  return String.fromCharCode(3 + c.charCodeAt(0));
      }
      return results;
    });

};


testing('abxyz1');