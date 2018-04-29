class List {
  constructor (list) {
    this.list = list || [];
  }
  compare(listTwo) {
    let key = String(Math.sign(listTwo.list.length - this.list.length));
    switch (key) {
      case "1": if (listTwo.list.join().match(this.list.join()) == null) {
                  return 'UNEQUAL'
                } else {
                  return 'SUBLIST'; 
                } break;
      case "0": if (listTwo.list.join().match(this.list.join()) == null) {
                  return 'UNEQUAL'
                } else {
                  return 'EQUAL'; 
                } break;
      case "-1": if (this.list.join().match(listTwo.list.join()) == null) {
                  return 'UNEQUAL'
                } else {
                  return 'SUPERLIST'; 
                } break;
      default:
        break;
    }    
  }
}

module.exports = List;