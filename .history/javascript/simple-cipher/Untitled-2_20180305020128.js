var alphabet = "abcdefghijklmnopqrstuvwxyz";

function test(input) {
    var arr = input.split('')
    var results =[], key = 'abc'
    for (x in input) {
        
        results = alphabet.indexOf(arr[x]) + alphabet.indexOf(key[])
    
        
          results.push(String.fromCharCode(key[x] + c.charCodeAt(0)));break;
        }     
    
        
        results = results.join('')
        testing = results.substr(0, 10)
        return results;
};
    
test('abc');
/*
function generateRandomKey() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var i;
    var randomKey = '';
    for (i=0; i < 100; i++) {
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        randomKey += getRandomLetter;
    }
    return randomKey;
}

generateRandomKey()
*/