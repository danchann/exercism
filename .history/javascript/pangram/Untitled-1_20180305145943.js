
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bcdefghijklmnopqrstuvwxyz`;
let m;

if ((/.[a-z]+/g).test(input)) {
    return true
} else {
    return false
}