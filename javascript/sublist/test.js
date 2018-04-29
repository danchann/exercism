return { 
    true : false ? console.log("true") : console.log("false")
}

return {
    '-1': isSublist(other.list, this.list)
      ? 'SUBLIST'
      : 'UNEQUAL',
    '0': isSublist(other.list, this.list)
      ? 'EQUAL'
      : 'UNEQUAL',
    '1': isSublist(this.list, other.list)
      ? 'SUPERLIST'
      : 'UNEQUAL'
  } [lengthDiff(this, other)];



  
