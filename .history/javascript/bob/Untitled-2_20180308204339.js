var str = 'Tom-ay-to, tom-aaaah-to.';
var result;


//all capital letters and no numbers
if ((str == str.toUpperCase() && (!(/\d/).test(str)) || str.endsWith('?'))) {
    result = 'Whoa, chill out!';
}
//has a question mark at the end or end with white space
(str.endsWith('?') || str.endsWith(' ')) ? (result = 'Sure.') : "";


if (str == '' || str.includes('\t' || str.includes('   ')) {
    result = "Fine. Be that way!"
} else {
    result = "Whatever."
}

console.log(result)