
var ginza0 = require('./data/tokyo30m/20141009_08_45.json');
var keys = Object.keys(ginza0);
var devs = {};

var total = keys.reduce(function(previousValue, currentValue, index, array) {
	var temp = previousValue + Object.keys(ginza0[currentValue]).length;
	return temp;
},0);
console.log('TOTAL = '+total);

keys.forEach(function(key){
	var keys2 = Object.keys(ginza0[key]);
	keys2.forEach(function(key2){
		if(!devs[key2]){ 
			devs[key2] = [];
		}
		devs[key2].push(key);
	});
});


console.log(Object.keys(devs).length);
