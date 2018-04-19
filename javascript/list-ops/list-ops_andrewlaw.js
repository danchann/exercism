class List {
  constructor(values) {
      this.values = values || [];
  }
  append(anotherList) {
      for (let i = 0; i < anotherList.length(); i++) {
          this.values.push(anotherList.values[i]);
      }
      return this;
  }
  concat(anotherList) {
      return this.append(anotherList);
  }
  filter(cb) {
      let result = [];
      for (let i = 0; i < this.length(); i++) {
          if (cb(this.values[i])) {
              result.push(this.values[i]);
          }
      }
      return new List(result);
  }
  length() {
      let i = 0;
      while (typeof this.values[i] !== 'undefined') {
          i++
      }
      return i;
  }
  map(cb) {
      let result = [];
      for (let i = 0; i < this.length(); i++) {
          result.push(cb(this.values[i]));
      }
      return new List(result);
  }
  foldl(cb, n) {
      for (let i = 0; i < this.length(); i++) {
          n = cb(this.values[i], n);
      }
      return n;
  }
  foldr(cb, n) {
      for (let i = this.length() - 1; i >= 0; i--) {
          n = cb(this.values[i], n);
      }
      return n;
  }
  reverse() {
      let result = [];
      for (let i = this.length() - 1; i >= 0; i--) {
          result.push(this.values[i]);
      }
      return new List(result);
  }
}

module.exports = List;