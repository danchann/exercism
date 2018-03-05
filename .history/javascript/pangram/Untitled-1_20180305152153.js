
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const input = `bdefghijklmnopqrstuvwxyz`;
let m;

for (var x in alphabet) {
    c = alphabet[x]
    if ((/[c]+/g).test(input)) {
        return true
    } else {
        return false
    }


}
