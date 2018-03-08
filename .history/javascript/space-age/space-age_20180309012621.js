function SpaceAge(value) {
    this.value = value;
};

SpaceAge.prototype.onEarth = function() {
    return Number((this.val1 / 31557600).toFixed(2));
}
SpaceAge.prototype.onMercury = function() {
    return Number((this.value / 31557600).toFixed(2)/0.2408467);
}
SpaceAge.prototype.onVenus = function() {
    return Number((this.value / 31557600).toFixed(2)/0.61519726);
}
SpaceAge.prototype.onMars = function() {
    return Number((this.value / 31557600).toFixed(2)/1.8808158);
}
SpaceAge.prototype.onJupiter = function() {
    return Number((this.value / 31557600).toFixed(2)/11.862615);
}
SpaceAge.prototype.onSaturn = function() {
    return Number((this.value / 31557600).toFixed(2)/29.447498);
}
SpaceAge.prototype.onUranus = function() {
    return Number((this.value / 31557600)/84.016846).toFixed(2);
}
SpaceAge.prototype.onNeptune = function() {
    return Number((this.value / 31557600)/164.79132).toFixed(2);
}

module.exports = SpaceAge;