class List {
  constructor(lista){
    this.values = lista || [];
  }

  append(listb) {
    let result = this.values;
    for (var x of listb.values) {
      result.push(x)
    }
    return new List(result);
  }
  concat(listb) {
    return this.append(listb);
  }
  filter(func) {
    let result = this.values;
    for (var x of this.values) {
      if (!func(x)) {
        let index = this.values.indexOf(x)
        result.splice(index,1);
      } 
    }
    return new List(result);
  }
  length() {
    return this.values.length
  }
  map(func) {
    let result = this.values;
    for (var x of this.values) {
      let output = func(x)
      let index = this.values.indexOf(x)
      result[index] = output
    }
    return new List(result);
  } 
  foldl(func, acc) {
    for (var x of this.values) {
      acc = func(x, acc)
    }
    return acc;
  }
  foldr(func, acc) {
    for (var x = this.length() -1; x >= 0; x--) {
      acc = func(this.values[x], acc)
    }
    return acc;
  }
  reverse() {
    let result = [];
    for (var x = this.length() -1; x >= 0; x--) {
      result.push(this.values[x])
    }
    return new List(result);
  }   
}

module.exports = List;