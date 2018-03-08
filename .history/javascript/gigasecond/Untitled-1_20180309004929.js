
var startdate = new Date(Date.UTC(2015, 8, 14));
var interval = 1000000000 * 1000; //change to ms

var enddate = new Date(startdate.getTime() + interval);

enddate.setSeconds();
enddate.setMinutes();
enddate.setHours();
console.log(enddate);

