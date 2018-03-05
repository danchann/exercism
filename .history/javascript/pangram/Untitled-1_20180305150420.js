
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bcdefghijklmnopqrstuvwxyz`;
let m;

if ((/[a]+/g).test(input)) {
    return true
} else {
    return false
}