const alphabet = "abcdefghijklmnopqrstuvwxyz";
class SimpleCipher {
    key: string

    constructor(key ? : string) {
        if (key === '' || !(/^[a-z]+$/g).test(key!)) {
            throw new Error('Bad key');
        }
        this.key = key || generateRandomKey();
    }

    encode(decodeMessage: string): string {
        let encodeMessage = ''
        let arr = decodeMessage.split('')
        let results = [];
        for (let x in arr) {
            let keyIndex = Number(x) % this.key.length;
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

    decode(simpleCipher: string): string {
        let decodeMessage = ''
        let arr = simpleCipher.split('')
        let results = [];
        for (let x = 0; x < simpleCipher.length; x++) {
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
    let randomKey = '';
    for (let i = 0; i < 100; i++) {
        let getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        randomKey += getRandomLetter;
    }
    return randomKey;
}

export default SimpleCipher