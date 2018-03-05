
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bdefghijklmnopqrstuvwxyz`;
let m;

if ((/[abcdefghijklmnopqrstuvwxyz]+/g).test(input)) {
    return true
} else {
    return false
}