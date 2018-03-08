function Gigasecond(date) {
    this.date = date
    this.interval = 1000000000;
};

Gigasecond.prototype.date = function () {
    var anniversayDate = new Date(this.date.getTime() + this.interval);
    return this.convertDate(anniversaryDate);
}

Gigasecond.prototype.convertDate = function(date) {
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date;
  };

module.exports = Gigasecond;