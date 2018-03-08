
    var startdate = Date.UTC(2015, 8, 14);
    this.interval = 1000000;



    var enddate = (startdate.getTime() + this.interval);
    
    enddate.setSeconds(0);
    enddate.setMinutes(0);
    enddate.setHours(0);
    return enddate;

