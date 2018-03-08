
var startdate = new Date(Date.UTC(2015, 8, 14));
interval = 1000000000 * 1000; //change to ms

var enddate = new Date(startdate.getTime() + this.interval);

enddate.setSeconds(0);
enddate.setMinutes(0);
enddate.setHours(0);
console.log(enddate);

