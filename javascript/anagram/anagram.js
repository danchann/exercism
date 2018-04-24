class Anagram {
  constructor(str1) {
    this.str1 = str1;
  }
  matches(arr) {
    let str2, result = [];
    if (!Array.isArray(arr)) {
      arr = Array.from(arguments);
    }
    if (arr.length < 2) {
      if (this.str1.toLowerCase == arr[0].toLowerCase()) return result = [];
      this.str1 = this.str1.toLowerCase().split("").sort().join("");
      str2 = arr[0].split("").sort().join("");
      this.str1 == str2 ? result.push(arr[0]) : "";
    } else {
      this.str1 = this.str1.toLowerCase().split("").sort().join("");
      for (var x = 0; x < arr.length; x++) {
        str2 = arr[x].toLowerCase().split("").sort().join("");
        this.str1 == str2 ? result.push(arr[x]) : "";
      }
    }
    return result;
  }
}

module.exports = Anagram;