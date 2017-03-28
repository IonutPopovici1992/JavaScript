// write a JavaScript function that reverse a number

function reverse_a_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(reverse_a_number(32243));
