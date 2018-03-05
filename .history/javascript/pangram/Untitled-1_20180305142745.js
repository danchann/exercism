
const regex = /[a-z]+/;
const str = `abcdefghijklmnopqrstuvwyz`;
let m;

if (regex.test(str) < 26) {
    return false
} else {
    return true
}