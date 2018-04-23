class Isogram {
  constructor (word) {
    this.word = word.replace(/-| /g, "").toLowerCase();
  }
  isIsogram() {
    return (this.word.split("").sort().join("").match(/(.)\1+/g)) ? false: true;
  }
}

module.exports = Isogram;