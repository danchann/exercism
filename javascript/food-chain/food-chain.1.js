class FoodChain {
  // constructor(){}
  verse() {
    let animal_1, animal_2, key, arg1, arg2, result = "", a, b, c, d, e, x;
    let animal = ["", "fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
    // animal_1 = arr[arguments[0]-1]; 
    a = arguments[0];
    b = a-1; 
    // key = arg1;
    // arguments[0] > 1 ? animal_2 = arr[arguments[0]-2]: "";
    // if (arguments.length > 1) {      
    //   animal_2 = arr[arguments[1]-1],
    //   arg2 = arguments[1];
    //   key = arg2;
    // }
    switch (a) {
      case 1: a = 1; break;
      case 2: animal[a]; animal[b]+".\n"; c = "It"; break;
      case 3: animal[a]; animal[b]+" "; c = "that"; d = "How absurd to"; e = "a"; break;
      case 4: animal[a]; animal[b]; c = "that"; d = "Imagine that, to"; e = "a"; break;
      case 5: animal[a]; animal[b]; c = "that"; d = "What a hog, to"; e = "a"; break;
      case 6: animal[a]; animal[b]; c = "that"; d = "Just opened her throat and"; e = "a"; break;
      case 7: animal[a]; animal[b]; c = "that"; d = "I don\'t know how she"; e = "a"; break;
    
      default:
        break;
    }    
    
    // Construct song
    result += `I know an old lady who swallowed a ${animal[a]}.\n`,
    result += `${d} swallow ${e} ${animal[a]}!\n`;
    
    let counter = a;
    while (counter > 3) {
      let a = counter, b = counter -1;     
      result += `She swallowed the ${animal[a]} to catch the ${animal[b]}.\n`
          counter--;
    }
    // Bird line
    result += `She swallowed the bird to catch the spider `
    result += `${c} wriggled and jiggled and tickled inside her.\n`,
    result += `She swallowed the ${animal[a]} to catch the ${animal[b]}`
    bottom_line = `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`,
    end_verse = `I know an old lady who swallowed a horse.\n    
    'She\'s dead, of course!\n\n`;
  
    let verse_len = arg1;
    arguments.length <2 ? arg2 = arg1: "";
  
    while (verse_len <= arg2) {
        switch (key) {
          case 8: a = result += first_line + second_line + middle_line + wriggled; verse_len ++; 
          case 7: a = result += first_line + second_line + middle_line + wriggled; verse_len ++; 
          case 6: a = result += first_line + second_line + middle_line + wriggled; verse_len ++; 
          case 5: a = result += first_line + second_line + middle_line + wriggled; verse_len ++; 
          case 4: a = result += first_line + second_line + middle_line + wriggled; verse_len ++; 
          case 3: a = result += first_line + second_line + middle_line + wriggled + middle_line; verse_len ++; 
          case 2: a = result += first_line + wriggled + middle_line; verse_len ++; break;
          case 1: result `I know an old lady who swallowed a ${a}.\n`; 
          default:
            break;
        }   
    }  
    result += bottom_line;    
    console.log(result)
    return result;
  }
  verses(num1, num2){
    this.verse(num1, num2);
  }
}

module.exports = FoodChain;

var song = new FoodChain();
song.verse(8)
// song.verses(1, 2)