function Gigasecond(date) {
    this.startdate = date;
    this.interval = 1000000000;
};

Gigasecond.prototype.date = function () {
    var endDate = new Date(this.startdate.getTime() + this.interval);
    this.convertDate(enddate);
    enddate.setSeconds(0);
    endDate.setMinutes(0);
    endDate.setHours(0);
    return endDate;

}

module.exports = Gigasecond;