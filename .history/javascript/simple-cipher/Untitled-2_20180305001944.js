function test(key) {
    var arr = key.split('')
    var results =[];
for (var x in arr) {    
    
    ouput = arr[x].replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'x': results.push(output);
          case 'y': return 'b';
          case 'z': return 'c';
          default:  return String.fromCharCode(3 + c.charCodeAt(0));
        }
        results.push(output) 
    });
}         
        results = results.join('')
        return results;
};
    
test('abcde');