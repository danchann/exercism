
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bcdefghijklmnopqrstuvwxyz`;
let m;

if ((/[a]+/gx).test(input)) {
    return true
} else {
    return false
}