var str = 'Okay if like my  spacebar  quite a bit? ';
var result;

//has a question mark at the end or end with white space
//if ((/\?$/).test(str) || (/\s(?<=\s)$/).test(str)) { 
(str.endsWith('?') || str.endsWith(' ')) ? (result = 'Sure.') : "";
console.log(result)