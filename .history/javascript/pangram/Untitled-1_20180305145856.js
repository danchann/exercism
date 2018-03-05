
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const str = `bcdefghijklmnopqrstuvwxyz`;
let m;

if (str.match(/.[a-z]+/g)) {
    return true
} else {
    return false
}