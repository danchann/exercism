function Bob (str) {
    this.str = str;
};

Bob.prototype.hey = function (str) {

//all capital letters and no numbers, and no \'
if ((!str.includes("'") && (str == str.toUpperCase() && (!(/\d/).test(str)) && !str.includes('\t') && !str.includes('   ') && !str == '' || str.endsWith('!')))) {
        result = 'Whoa, chill out!';
        return result; 
} else if 
//has a question mark at the end or end with white space
    ((str.endsWith('?') || str.endsWith(' ')) && !str.includes("    ")) { 
    return 'Sure.';
} else if ((str == '' || str.includes('\t') || str.includes('   ')) && (!str.endsWith("...") && !str.includes("     "))) {
    return "Fine. Be that way!"
} else {
    return "Whatever."
}

} //end of function

module.exports = Bob;

