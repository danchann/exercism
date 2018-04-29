class ETL {
  transform(old) {
    let result = {};

    for (var x in Object.keys(old)) {
      for (var y of Object.values(old)[x]) {
        y = y.toLowerCase()
        result[y] = Number(Object.keys(old)[x]);
      } 
    }
  return result;    
  }
}

module.exports = ETL;