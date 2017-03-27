// write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

console.log("--------------------");

for (var year = 2014; year <= 2050; year++) {
	var date = new Date(year, 0, 1);
	if (date.getDay() === 0) {
		console.log("1st January is being a Sunday " + year);
	}
}

console.log("--------------------");
