class Triangle {
  constructor (a,b,c) {
    this.arr = [...arguments].sort();
    this.a = a;
    this.b = b;
    this.c = c;    
  }
  kind() {
    let count = [];
    let str = this.arr.toString("");
    // Test for triangle inequalities and zero values
    if (this.a+this.b<this.c || this.b+this.c<this.a || this.c+this.a<this.b) {
      throw new Error();
    } else if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error();
    }
    // Loop for matching sides
    for(var i=0; i < this.arr.length; i++) {
      var regex = new RegExp(this.arr[i], "g");
      count.push(str.match(regex).length);
    }
    // Find max no. of matching sides
    switch(Math.max(...count)) {
      case 3: return 'equilateral';
      case 2: return 'isosceles';
      case 1: return 'scalene';
    }
  }  
}
module.exports = Triangle;