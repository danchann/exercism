function test(key) {
    var arr = key.split('')

for (var x in arr) {    
    
    ouput = arr[x].replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'x': return 'a';
          case 'y': return 'b';
          case 'z': return 'c';
          default:  return String.fromCharCode(3 + c.charCodeAt(0));
        }
        results
    });
}         
        results = results.join('')
        return results;
};
    
test('aaaaaaaaaa');