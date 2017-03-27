// write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

var year = window.prompt("Input a year: ");
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);
