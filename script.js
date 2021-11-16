//CAPITALIZE KEYS
const capitalizeKeys = (object) => {
 return object
   .toUpperCase()
};

console.log(capitalizeKeys('reksio, 3'));

//STRING TO OBJECT
const stringToObject = (string) => {
  return string
};

console.log(stringToObject('one:-1, two:hi there,t hree:whats that?'));

//GOING SHOPPING
let strings = ['2 tomatoes', '1 egg', '3 pumpkins']

strings.forEach(function(string){
                console.log(string);
                });

//MAP OBJECT
const mapObject = function(name, time){
  console.log('good ${time} ${name}');
};
mapObject('mario', 'evening');
