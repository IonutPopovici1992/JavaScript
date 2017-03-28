// write a JavaScript function that checks whether a passed string is palindrome or not

function check_palindrome(str_entry) {
	// change the string into lower case and remove all non-alphanumeric characters
	var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
	var count = 0;
	// check whether the string is empty or not
	if (cstr === "") {
		alert("Nothing found!");
		return false;
	}
	// check if the length of the string is even or odd
	if ((cstr.length) % 2 === 0) {
		count = (cstr.length) / 2;
	} else {
		// if the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			alert("Entry is a palindrome.");
		} else {
			// if the length of the string is odd ignore middle character
			count = (cstr.length - 1) / 2;
		}
	}

	// loop through to check the first character and then move next
	for (var x = 0; x < count; x++) {
		// compare characaters and drop them if they do not match
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			alert("Entry is not a palindrome.");
			return false;
		}
	}

	alert("The entry is a palindrome.");
	return true;
}

check_palindrome("madam");
check_palindrome("nurses run");
check_palindrome("fox");
