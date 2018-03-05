
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
var reg = /[a-z]/g
const str = 'bdefghijklmnopqrstuvwxyz';

for (var x in alphabet) {
    if (str.search(alphabet[x]) == -1) {
        return false
    }
}
    







/*
for (var x in alphabet) {
    var letter = alphabet[x];
    if (().test(input)) {
        return true
    } else {
        return false
    }



}
*/