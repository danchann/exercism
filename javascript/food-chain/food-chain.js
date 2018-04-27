class FoodChain {
  // constructor(){}
  
  verse() {
  let animal = ["", "fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
  let a = arguments[0];
  let b = a+1, c, d, e, result = "";
  let end_verse = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';

  if (a == 8) { this.result = end_verse; return this.result; };

  switch (a) {
    case 2: animal[a]; animal[b]+".\n"; c = "It"; break;
    case 3: animal[a]; animal[b]+" "; c = "that"; d = "How absurd to"; e = " a"; break;
    case 4: animal[a]; animal[b]; c = "that"; d = "Imagine that, to"; e = " a"; break;
    case 5: animal[a]; animal[b]; c = "that"; d = "What a hog, to"; e = " a"; break;
    case 6: animal[a]; animal[b]; c = "that"; d = "Just opened her throat and"; e = "ed a"; break;
    case 7: animal[a]; animal[b]; c = "that"; d = "I don\'t know how she"; e = "ed a"; break;

    default:
      break;
  }    

    // Construct song
    result += `I know an old lady who swallowed a ${animal[a]}.\n`;
    if (a >= 3) result += `${d} swallow${e} ${animal[a]}!\n`;
    // Middle verses
    let counter = a;
    while (counter > 3) {
      let a = counter, b = counter -1;     
      result += `She swallowed the ${animal[a]} to catch the ${animal[b]}.\n`
          counter--;
    }
    // Bird line    
    if (a >= 3) {
      result += `She swallowed the bird to catch the spider `
    }
    if (a >= 2) { 
      result += `${c} wriggled and jiggled and tickled inside her.\n`,
      result += `She swallowed the spider to catch the fly.\n`
    }

    let bottom_line = `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`;
    
    result += bottom_line;    
    this.result = result;
    return this.result;
  }

  verses(num1, num2){
    let counter = num1, result = "";
    while (counter <= num2) {
          this.verse(counter);
          result += this.result + "\n";
          counter++;
    }
          return result;
  }
}

module.exports = FoodChain;