var alphabet = "abcdefghijklmnopqrstuvwxyz";

function test(input) {
    var arr = input.split('')
    var results =[], key = 'abc'
    for (x in input) {
        var newIndex = alphabet.indexOf(arr[x]) +   
        if (x > )
        alphabet.indexOf(key[x])
        if (newIndex >= alphabet.length) {
            newIndex -= alphabet.length; 
        }
          results.push(alphabet[newIndex]);
        }       
        return results.join('')
        
};
    
test('iamapandabear');
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