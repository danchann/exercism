function Gigasecond(date) {
    this.startdate = date
    this.interval = 1000000000;
};

gs.prototype.date = function () {
    var endDate = new Date(this.date.getTime() + this.interval);
    this.convertDate(anniversaryDate);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date;

}


    
 

module.exports = Gigasecond;