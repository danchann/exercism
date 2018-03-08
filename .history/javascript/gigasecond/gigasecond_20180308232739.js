function Gigasecond(date) {
    this.startdate = date;
    this.interval = 1000000000;
};

Gigasecond.prototype.date = function () {
    var endDate = new Date(this.date.getTime() + this.interval);
    this.convertDate(endDate);
    endDate.setSeconds(0);
    endDate.setMinutes(0);
    endDate.setHours(0);
    return endDate;

}

module.exports = Gigasecond;