
const regex = /[abcdefghijklmnopqrstuvwxyz]+/;
const input = `bdefghijklmnopqrstuvwxyz`;
let m;

if ((/[b]+/g).test(input)) {
    return true
} else {
    return false
}