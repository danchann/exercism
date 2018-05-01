exports.at = at;

function at(inputHr, inputMin) {
  let min_per_day = 1440
  let hour = inputHr*60 + min_per_day;
  let min = (inputMin || 0);
  let time_in_min = (hour + min); 
  let time = (min_per_day + (time_in_min % min_per_day)) % 1440 // add 1440 to ensure positive
  time = time * 60000; // convert to milliseconds
  
  let clock = {};
  clock.value = time;
  
  clock.toString = function () {
    d = new Date(time).toISOString().split('T')[1].split(':');
    return d[0]+":"+d[1];
  };
  clock.plus = function (input) {
    time += input * 60000; // convert mins to milliseconds
    return clock;    
  };
  clock.minus = function (input) {
    time -= input * 60000; // convert mins to milliseconds
    return clock;    
  };
  clock.equals = function (other) {
    return +clock.value === +other.value;
  };

return Object.create(clock);
};
