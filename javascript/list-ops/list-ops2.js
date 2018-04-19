function List(lista) {
    this.values = lista || [];
  }
List.prototype = {
  append: function(listb) {
    let result = this.values;
    for (var x of listb.values) {
      result.push(x)
    }
    return new List(result);
  },
  concat: function(listb) {
    return this.append(listb);
  },
  filter: function(func) {
    for (var x of this.values) {
      if (!func(x)) {
        let index = this.values.indexOf(x)
        this.values.splice(index,1);
      } 
    }
    return this;
  },
  length: function() {
    return this.values.length
  },
  map: function(func) {
    for (var x of this.values) {
      let result = func(x)
      let index = this.values.indexOf(x)
      this.values[index] = result
    }
    return this;
  }, 
  foldl: function(func, acc) {
    for (var x of this.values) {
      acc = func(x, acc)
    }
    return acc;
  },
  foldr: function(func, acc) {
    for (var x = this.length() -1; x >= 0; x--) {
      acc = func(this.values[x], acc)
    }
    return acc;
  },
  reverse: function() {
    let result = [];
    for (var x = this.length() -1; x >= 0; x--) {
      result.push(this.values[x])
    }
    this.values = result
    return this;
  }
}   

module.exports = List;
