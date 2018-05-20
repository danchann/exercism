"use strict";
exports.__esModule = true;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var SimpleCipher = /** @class */ (function () {
    function SimpleCipher(key) {
        if (key === '' || !(/^[a-z]+$/g).test(key)) {
            throw new Error('Bad key');
        }
        this.key = key || generateRandomKey();
    }
    SimpleCipher.prototype.encode = function (decodeMessage) {
        var encodeMessage = '';
        var arr = decodeMessage.split('');
        var results = [];
        var x;
        for (x in arr) {
            var keyIndex = x % this.key.length;
            var newIndex = alphabet.indexOf(arr[x]) +
                alphabet.indexOf(this.key[keyIndex]);
            if (newIndex >= alphabet.length) {
                newIndex -= alphabet.length;
            }
            results.push(alphabet[newIndex]);
        }
        encodeMessage = results.join('');
        return encodeMessage;
    };
    SimpleCipher.prototype.decode = function (simpleCipher) {
        var decodeMessage = '';
        var arr = simpleCipher.split('');
        var results = [];
        var x;
        for (x in simpleCipher) {
            var newIndex = alphabet.indexOf(arr[x]) - alphabet.indexOf(this.key[x]);
            if (newIndex < 0) {
                newIndex += alphabet.length;
            }
            results.push(alphabet[newIndex]);
        }
        decodeMessage = results.join('');
        return decodeMessage;
    };
    return SimpleCipher;
}());
function generateRandomKey() {
    var i;
    var randomKey = '';
    for (i = 0; i < 100; i++) {
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        randomKey += getRandomLetter;
    }
    return randomKey;
}
exports["default"] = SimpleCipher;
