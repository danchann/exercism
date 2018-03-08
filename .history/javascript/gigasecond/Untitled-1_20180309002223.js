
    var startdate = Date.UTC(2015, 8, 14);
    this.interval = 1000000000 * 1000; //change to ms

    var event1 = new Date('July 1, 1999');

    var enddate = new Date(startdate.getTime() + this.interval);
    
    enddate.setSeconds(0);
    enddate.setMinutes(0);
    enddate.setHours(0);
    return enddate;

