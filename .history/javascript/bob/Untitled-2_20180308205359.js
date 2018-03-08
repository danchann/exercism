var str = 'Let\'s go make out behind the gym!';
var result;


//all capital letters and no numbers
if ((str == str.toUpperCase() && (!(/\d/).test(str)) || str.endsWith('!'))) {
    
    result = 'Whoa, chill out!';
    return result;
} else if 
//has a question mark at the end or end with white space
    (str.endsWith('?') || str.endsWith(' ')) { 
    return 'Sure.';
} else if (str == '' || str.includes('\t') || str.includes('   ')) {
    return "Fine. Be that way!"
} else {
    return "Whatever."
}

console.log(result)
