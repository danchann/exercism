const alphabet = "abcdefghijklmnopqrstuvwxyz";
class SimpleCipher {
    key: string

    constructor(key?: string) {
        if (key === '' || !(/^[a-z]+$/g).test(key!)) {
             throw new Error('Bad key');    
        }
        this.key = key || generateRandomKey();
    }

    encode( decodeMessage: string): string {
        let encodeMessage = ''
        let arr = decodeMessage.split('')
        let results =[];
        let x: any
        for (x in arr) {
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

    decode( simpleCipher: any ): string {
        let decodeMessage = ''
        let arr = simpleCipher.split('')
        let results =[];
        let x: any
        for (x in simpleCipher) {
            var newIndex = alphabet.indexOf(arr[x]) - alphabet.indexOf(this.key[x])
            if (newIndex < 0) {
                newIndex += alphabet.length; 
            }
              results.push(alphabet[newIndex]);
            }       
            decodeMessage = results.join('')
            return decodeMessage

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
