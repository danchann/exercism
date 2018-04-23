class BeerSong {
  
  verse(a) {
    let x, y, z;
    if (a == 1 ) {
      x = "1 bottle", y=x, z = "no more bottles"
      return `${x} of beer on the wall, ${y} of beer.\nTake it down and pass it around, ${z} of beer on the wall.\n`
    } else if (a == 0) {
      x = "No more bottles", y = "no more bottles", z = "99 bottles";
      return `${x} of beer on the wall, ${y} of beer.\nGo to the store and buy some more, ${z} of beer on the wall.\n`
    } else {
      x = a + " bottles", y = x;
      a == 2 ? z = a-1 + " bottle": z = a-1 + " bottles";
    }
    return `${x} of beer on the wall, ${y} of beer.\nTake one down and pass it around, ${z} of beer on the wall.\n`
  }
  sing() {
    let result = "", a = arguments[0], b; 
    arguments.length < 2 ? b = 0: b = arguments[arguments.length-1];
    while (a >= b) {
      a -1 >= b ? result += this.verse(a) + "\n" : result += this.verse(a);
      a--
    }
  return result;
  }
}

module.exports = BeerSong;