var DnaTranscriber = function (input) {};
   

DnaTranscriber.prototype.toRna = function (input) {    

    var result = []; 
    for (var x in input) {
            if (input[x] == 'C') {
                result.push('G');
            } else if (input[x] == 'G') {
                result.push('C');
            } else if (input[x] == 'T') {
                result.push('A');
            } else if (input[x] == 'A') {
                result.push('U');
            }  else {
                throw new Error('Invalid input')
                break;
            }
    }
    return result.join('');
};

module.exports = DnaTranscriber;