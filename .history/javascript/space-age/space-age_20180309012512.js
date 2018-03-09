function SpaceAge(value) {
    this.val1 = val1;
};

SpaceAge.prototype.onEarth = function() {
    return Number((this.val1 / 31557600).toFixed(2));
}
SpaceAge.prototype.onMercury = function() {
    return Number((this.val2 / 31557600).toFixed(2)/0.2408467);
}
SpaceAge.prototype.onVenus = function() {
    return Number((this.val2 / 31557600).toFixed(2)/0.61519726);
}
SpaceAge.prototype.onMars = function() {
    return Number((this.val2 / 31557600).toFixed(2)/1.8808158);
}
SpaceAge.prototype.onJupiter = function() {
    return ((this.val2 / 31557600).toFixed(2)/11.862615);
}
SpaceAge.prototype.onSaturn = function() {
    return Number((this.val2 / 31557600).toFixed(2)/29.447498);
}
SpaceAge.prototype.onUranus = function() {
    return Number((this.val2 / 31557600).toFixed(2)/84.016846);
}
SpaceAge.prototype.onNeptune = function() {
    return Number((this.val2 / 31557600).toFixed(2)/164.79132);
}

module.exports = SpaceAge;