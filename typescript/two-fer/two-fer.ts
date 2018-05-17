class TwoFer {
  static twoFer( who?: string ) {
    if (typeof who === 'undefined') 
      who = 'you';
    
    return `One for ${who}, one for me.`
  }
}

export default TwoFer
