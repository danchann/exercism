class RunLengthEncoding {

  static encode(str: string) {
    if (!str) {
      return str
    }
    let x = 0,
      arr = []
    let counter = 1
    const result = []
    arr = str.split("")
    while (arr[x] !== undefined) {
      while (arr[x] === str[x + 1]) {
        counter++
        x++
      }
      counter > 1 ? result.push(counter, str[x]) : result.push(str[x])
      counter = 1, x++
    }
    return result.join("")
  }

  static decode(str: string) {
    if (!str) {
      return str
    } else if (!/\d/g.test(str)) {
      return str
    }
    let x = 0,
      arr = []
    let counter = 0
    const result = []
    arr = str.split("")
    while (arr[x] !== undefined) {
      if (arr[x] === " ") {
        result.push(str[x])
        x++
        continue
      }
      let getNum = ''
      while (Number(arr[x])) {
        getNum += (arr[x])
        counter = Number(getNum)
        x++
      }
      counter > 1 ? result.push(str[x].repeat(counter)) : result.push(str[x])
      counter = 0, x++
    }
    return result.join("")
  }
}

export default RunLengthEncoding