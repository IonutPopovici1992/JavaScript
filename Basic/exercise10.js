// write a JavaScript program to calculate multiplication and division of two numbers (input from user)

function multiplyBy() {
	number1 = document.getElementById("firstNumber").value;
	number2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = number1 * number2;
}

function divideBy() {
	number1 = document.getElementById("firstNumber").value;
	number2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = number1 / number2;
}
