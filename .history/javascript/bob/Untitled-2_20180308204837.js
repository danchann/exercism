var str = 'WATCH OUT!';
var result;


//all capital letters and no numbers
if ((str == str.toUpperCase() && (!(/\d/).test(str)) || str.endsWith('!'))) {
    result = 'Whoa, chill out!';
    return result;
}
//has a question mark at the end or end with white space
(str.endsWith('?') || str.endsWith(' ')) ? (result = 'Sure.', return result) : "";


if (str == '' || str.includes('\t') || str.includes('   ')) {
    result = "Fine. Be that way!"
} else {
    result = "Whatever."
}

console.log(result)
