function test(key) {
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
        results = results.join('')
        
        return results;
};
    
test('aaaaaaaaaa');