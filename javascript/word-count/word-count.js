class Words {
  count(input) {
    let result = [], word;
    word = input.toLowerCase();
    let regex = word.match(/[a-zA-Z0-9\u00C0-\u04FF']+/gi);
    for (var x in regex) {
      word = regex[x].replace(/^'|'$/g, '');
      result.push({'key': word});
    }
    
    var Output = result.reduce(function(sums,entry){
      sums[entry.key] = (+sums[entry.key] || 0) + 1;
      return sums;
   },{});
   return Output;
  }
}
module.exports = Words;