class Rational {
  constructor (a, b) {
    if (b === 0) throw new Error("denominator cannot be zero!");
    this.a = a;
    this.b = b;

    this.reduce(); // reduce to lowest fraction         
  }
  add(input){
    let result_a = ((this.a * input.b) + (input.a * this.b)),
        result_b = (this.b * input.b);
    return new Rational(result_a, result_b);
  }
  sub(input){
    let result_a = (this.a * input.b - input.a * this.b),
        result_b = (this.b * input.b);
    return new Rational(result_a, result_b);
  }
  mul(input){
    return new Rational((this.a * input.a) , (this.b * input.b));
  }
  div(input){
    return new Rational((this.a * input.b) , (input.a * this.b));
  }
  abs(){
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }
  exprational(n){
    return new Rational(Math.pow(this.a, n), Math.pow(this.b, n));    
  }
  expreal(base){
    return Math.pow(10.0, Math.log10(Math.pow(base, this.a)) / this.b);
  }
  reduce(){
    // Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
    var commonDivisor = this.gcd(this.a, this.b);
  
    this.a /= commonDivisor;
    this.b /= commonDivisor;
    this.ensureSignInNumerator();
  
    return this;
  };
  gcd(a, b) {
    var localA = a;
    var localB = b;
    while (localB !== 0) {
      var t = localB;
      localB = localA % localB;
      localA = t;
    }
    return localA;
  };
  ensureSignInNumerator () {
    if (this.b < 0) {
      this.b = -this.b;
      this.a = -this.a;
    }
  };

}

module.exports = Rational;
