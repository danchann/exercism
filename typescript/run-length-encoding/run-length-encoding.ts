 class RunLengthEncoding {

 static encode(str:any) {
    if (!str) {
      return str
    }
    let x = 0,
      counter = 1,
      result = [];
    str = str.split("");
    while (str[x] !== undefined) {
      if (str[x] == " ") {
        result.push(str[x]);
        x++;
        continue;
      }
      while (str[x] == str[x + 1]) {
        counter++;
        x++;
      }
      counter > 1 ? result.push(counter, str[x]) : result.push(str[x]);
      counter = 1, x++;
    }
    return result.join("");
  }
  
  static decode(str:any) {
    if (!str) {
      return str
    } else if (!/\d/g.test(str)) {
      return str;
    }
    let x = 0,
      counter = 0,
      result = [];
    str = str.split("");
    while (str[x] !== undefined) {
      if (str[x] == " ") {
        result.push(str[x]);
        x++;
        continue;
      }
      while (!isNaN(str[x])) {
        counter += str[x]
        x++;
      }
      counter > 1 ? result.push(str[x].repeat(counter)) : result.push(str[x]);
      counter = 0, x++;
    }
    return result.join("");
  }
}

export default RunLengthEncoding

RunLengthEncoding.encode('AABBBCCCC')