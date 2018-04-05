var Robot = function() { 
    this.name = genName();
    //console.log(counter, this.name, resets);
}

Robot.prototype.reset = function() {
	var oldName = this.name;
    this.name = genName();
    //console.log(this.name, this.name == robot.name)
    resets++
};
var loop=0;
var resets = 0;
var counter = 0;    
var robot = { name: [] };

function genName() {
    var result = false;
    Lett1 = String.fromCharCode(capLet()); 
    Lett2 = String.fromCharCode(capLet()); 
    Numb = randNum();
    
    randName = String(Lett1+Lett2 + Numb)
    while (result==false || loop == 11000) {
        robot.name.includes(randName) ? (randName = genName()) : (robot.name.push(randName), result=true); 
        loop++;      
    }
    counter++;
    return randName;
}
function capLet () {
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
// robot = new Robot();
// robot.reset();

//Robot()
// function lots() {
// var i;
//     var numRobots = 10000;
//     var usedNames = {};

//     for (i = 0; i < numRobots; i++) {
//       var newRobot = new Robot();
//       usedNames[newRobot.name] = true;
//     }
//     console.log(i)
// }

// lots()