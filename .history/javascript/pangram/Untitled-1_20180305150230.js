
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bcdefghijklmnopqrstuvwxyz`;
let m;

if ((/.[a-z]+/gx).test(input)) {
    return true
} else {
    return false
}