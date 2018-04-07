let Robot = function() { 
    this.name = genName();
}

Robot.prototype.reset = function() {
	var oldName = this.name;
    this.name = genName(oldName);
};

var robotNames = new Set(  ); 

function genName() {
    let Lett = function() { return String.fromCharCode(randLet()) }; 
    let Numb = function() { return randNum() };
 
    do {
        var name = String(Lett() + Lett() + Numb());
    } while (robotNames.has(name))
        
    robotNames.add(name), result = true;  
    return name;
}

function randLet () {
    letter = Math.floor(Math.random() * (91-65)+65);
    return letter;
}

function randNum() {
    number = String(Math.floor(Math.random() * (1000-0)+0));
    while (number.length < 3) {
        number = '0' + number;
    }
    return number;
}

module.exports = Robot;