
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const input = `bdefghijklmnopqrstuvwxyz`;
let m;

for (var x in alphabet) {
    var letter = alphabet[x];
    if (("/[`$letter`]+/g`).test(input)) {
        return true
    } else {
        return false
    }


}
