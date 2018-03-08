function SpaceAge(val1, val2) {
    this.val1 = val1;
};

SpaceAge.prototype.onEarth = function() {
    var age = (this.seconds / 31557600).toFixed(2);
}
SpaceAge.prototype.onMercury = function() {
    var age = (this.seconds / 31557600).toFixed(2)/0.2408467;
}
SpaceAge.prototype.onVenus = function() {
    var age = (this.seconds / 31557600).toFixed(2)/0.61519726;
}
SpaceAge.prototype.onMars = function() {
    var age = (this.seconds / 31557600).toFixed(2)/1.8808158;
}
SpaceAge.prototype.onJupiter = function() {
    var age = (this.seconds / 31557600).toFixed(2)/11.862615;
}
SpaceAge.prototype.onSaturn = function() {
    var age = (this.seconds / 31557600).toFixed(2)/29.447498;
}
SpaceAge.prototype.onUranus = function() {
    var age = (this.seconds / 31557600).toFixed(2)/84.016846;
}
SpaceAge.prototype.onNeptune = function() {
    var age = (this.seconds / 31557600).toFixed(2)/164.79132;
}

module.exports = SpaceAge;