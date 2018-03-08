function Gigasecond(date) {
    this.date = date
    this.interval = 1000000000;
};

Gigasecond.prototype.date = function () {
    var anniversayDate = new Date(this.date.getTime() + this.interval);
    return this._beginningOfTheDay(anniversarydte);
}


module.exports = Gigasecond;