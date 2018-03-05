
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const str = `bcdefghijklmnopqrstuvwxyz`;
let m;

if (regex.test(str) < 26) {
    return false
} else {
    return true
}