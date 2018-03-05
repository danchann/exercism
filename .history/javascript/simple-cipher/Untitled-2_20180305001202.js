function test(key) {
    var arr = key.split('')

var results = key.replace(/[a-z]/gi, function(c) {
    var results = [];
    
    results = key.replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'x': return 'a';
          case 'y': return 'b';
          case 'z': return 'c';
          default:  return String.fromCharCode(3 + c.charCodeAt(0));
        }
    });
        return results;
    
  });
        results = results.substr(0,10);
        console.log(results)

};
    
test('aaaa');