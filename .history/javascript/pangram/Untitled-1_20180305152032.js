
const regex = 'abcdefghijklmnopqrstuvwxyz';
const input = `bdefghijklmnopqrstuvwxyz`;
let m;


if ((/[c]+/g).test(input)) {
    return true
} else {
    return false
}