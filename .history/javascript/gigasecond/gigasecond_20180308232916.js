function Gigasecond(date) {
    this.startdate = date;
    this.interval = 1000000000;
};

Gigasecond.prototype.date = function () {
    var enddate = new Date(this.startdate.getTime() + this.interval);
    
    enddate.setSeconds(0);
    enddate.setMinutes(0);
    enddate.setHours(0);
    return enddate;

}

module.exports = Gigasecond;