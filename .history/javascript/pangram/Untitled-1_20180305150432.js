
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bcdefghijklmnopqrstuvwxyz`;
let m;

if ((/[b]+/g).test(input)) {
    return true
} else {
    return false
}