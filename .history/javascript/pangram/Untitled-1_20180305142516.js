
const regex = /[a-z]+?/g;
const str = `abcdefghijklmnopqrstuvwyz`;
let m;

if (regex.test(str) < 26) {
    return false
}