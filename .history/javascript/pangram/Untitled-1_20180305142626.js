
const regex = /[a-z]+?/;
const str = `abcdefghijklmnopqrstuvwxyz`;
let m;

if (regex.test(str) < 26) {
    return false
} else {
    return true
}