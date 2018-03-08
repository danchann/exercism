function Gigasecond(date) {
    this.date = date
    this.interval = 1000000000;
};

Gigasecond.prototype.date = function () {
    var gigasecondCelebrationDate = new Date(this.birthDate.getTime() + this.interval);
    return this._beginningOfTheDay(gigasecondCelebrationDate);
}


module.exports = Gigasecond;