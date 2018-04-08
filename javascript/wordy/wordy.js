class WordProblem {
    constructor (question) {
        this.question = question; 
    }

    answer() {
        // fails if not containing a digit or a math operator 
        if (!/\d+/g.test(this.question) || (!/(plus|minus|multiplied|divide)+/g.test(this.question))) {
            throw new ArgumentError();
        }

        var result;
        result = this.question.replace(/plus/gi, '+');
        result = result.replace(/minus/gi, '-');
        result = result.replace(/multiplied/gi, '*');
        result = result.replace(/divided/gi, '\/');
        console.log(result)
        var r = /-*([\d])+|\+|-|\*|\//g;

        var arr = result.match(r);
        for (var x=0; x<arr.length; x++) {
            arr[x].length > 1 ? arr[x][0] == "-" ? arr[x] = ("("+arr[x]+")") : "" : "";
        }
        do {
            arr.splice(0,3, eval(arr.slice(0,3).join('')))
        } while (arr.length>1)

        return result = eval(arr.join(''))
    }
}
class ArgumentError { }

module.exports = {
    WordProblem,
    ArgumentError
}
