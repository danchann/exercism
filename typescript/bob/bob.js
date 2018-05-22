"use strict";
exports.__esModule = true;
var Bob = /** @class */ (function () {
    function Bob() {
    }
    Bob.prototype.hey = function (str) {
        var result = '';
        //all capital letters and no numbers, and no \'
        if (( !str.includes("'") && ( str === str.toUpperCase() && (!(/\d/).test(str)) && !str.includes('\t') && !str.includes('   ') && typeof str !== undefined || str.endsWith('!') ) )) {
            result = 'Whoa, chill out!';
            return result;
        }
        else if 
        //has a question mark at the end or end with white space
        ((str.endsWith("?   ") || str.endsWith('?') || str.endsWith(' ')) && str !== '   ' && !str.endsWith("      ")) {
            return 'Sure.';
        }
        else if ((str == '   ' || str == '' || str.includes('\t') || str.includes('   ')) && (!str.endsWith("...") && !str.endsWith("    "))) {
            return "Fine. Be that way!";
        }
        else {
            return "Whatever.";
        }
    };
    return Bob;
}());
exports["default"] = Bob;

const bob = new Bob()
bob.hey('')