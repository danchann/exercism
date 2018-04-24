class Triangle {
  constructor (a,b,c) {
    this.arr = [...arguments];    
  }
  kind() {
    var count={};
      this.arr.forEach(number => 
        count[number] = (count[number] || 0) + 1);
        
  }
  bind() {

  }
  
}

var triangle = new Triangle(5, 5, 2);
triangle.kind()