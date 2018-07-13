var json = [
  { "city": "California" },
  { "city": "California" },
  { "city": "California" },
  { "city": "Texas" },
  { "city": "Florida" }
];
json.reduce(function(sums,entry){
   sums[entry.city] = (sums[entry.city] || 0) + 1;
   console.log(sums)
   return sums;
},{});


// returns 
// Object {California: 3, Texas: 1, Florida: 1}