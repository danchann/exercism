const alphabet = "abcdefghijklmnopqrstuvwxyz";
class SimpleCipher {
    key: string

    constructor(key?: string) {
        if (key === '' || !(/^[a-z]+$/g).test(key!)) {
             throw new Error('Bad key');    
        }
        this.key = key || generateRandomKey();
    }

    encode( decodeMessage: string ): string {
        let encodeMessage = ''
        let arr = decodeMessage.split('')
        let results =[];
        for (let x in arr) {
            let keyIndex = x % this.key.length;
            let newIndex = alphabet.indexOf(arr[x]) + 
        alphabet.indexOf(this.key[keyIndex]);
            if (newIndex >= alphabet.length) {
                newIndex -= alphabet.length; 
            }
              results.push(alphabet[newIndex]);
            }    
            encodeMessage = results.join('')   
            return encodeMessage
    }

    decode( /* Parameters go here */ ) {
        // Your code here
    }
}

function generateRandomKey() {
    
    var i;
    var randomKey = '';
    for (i=0; i < 100; i++) {
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        randomKey += getRandomLetter;
    }
    return randomKey;
}

export default SimpleCipher

const key = 'abcdefghij'
const simpleCipher = new SimpleCipher(key)
simpleCipher.encode('aaaaaaaaaa')
