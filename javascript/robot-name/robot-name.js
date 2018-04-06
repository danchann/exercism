let Robot = function(name) { 
    this.rName = name;
    //this.rName = //{ name: [] };
    this.name = genName(name);
    //console.log(counter, this.name, resets);
}

Robot.prototype.reset = function() {
	var oldName = this.name;
    this.name = genName(oldName);
    //console.log(this.name, this.name == robot.name)
    resets++
};
var loop=0;
var resets = 0;
var counter = 0;    
//var robot = { name: [ ] };

function genName(name, oldName) {
    var result = false;
    Lett1 = String.fromCharCode(capLet()); 
    Lett2 = String.fromCharCode(capLet()); 
    Numb = randNum();
    
    randName = String(Lett1+Lett2 + Numb)
    while (result==false || loop == 11000) {
        this.rName == undefined ? this.rName={ name: [] } : "";
        if (this.rName.name.includes(randName)) {
            (randName = genName());
        } else {
            (this.rName.name.push([randName]), result=true);
        }
          
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

// module.exports = Robot;
// let robot = new Robot();
// robot.reset();

// Robot()
function lots() {
var i;
    var numRobots = 10000;
    var usedNames = {};
    var prev = 0, fault = 0;

    for (i = 0; i < numRobots; i++) {
      var newRobot = new Robot();
      usedNames[newRobot.name] = true;
      prev == Object.keys(usedNames).length -1 ? "" :
      fault++, console.log(prev+" , "+Object.keys(usedNames).length+"Fault: "+fault);
      
      prev = Object.keys(usedNames).length;
    }
    console.log("Counter: "+counter + " Length: " + Object.keys(usedNames).length)
}

lots()