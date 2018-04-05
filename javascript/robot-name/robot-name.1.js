function Robot () {
    this.newName = genName(); 
    var robot = { name: [] };
    var result = false;
    randName = genName()
    //robot.name == "" ? robot["name"].push(randName): "";
    while (result==false) {
        robot.name == randName ? randName = genName() : (robot.name.push(randName), result=true);
    }
    //console.log(robot.name);
    return robot;    
};

Robot.prototype.reset = function() {
    // do {
        newName = genName();
        console.log(newName)
    // } while (originalName == newName)
}

function genName(randName) {
    Lett1 = String.fromCharCode(capLet()); 
    Lett2 = String.fromCharCode(capLet()); 
    Numb = randNum();
    randName = String(Lett1+Lett2 + Numb)
    return randName;
}
function capLet () {
    letter = Math.floor(Math.random() * (91-65)+65);
    return letter;
}

function randNum() {
    number = String(Math.floor(Math.random() * (999-0)+0));
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