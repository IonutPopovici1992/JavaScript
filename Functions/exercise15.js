// Write a JavaScript function to compute the value of b^n where n is the exponent and b is the bases.
// Accept b and n from the user and display the result.

function exponent(b, n) {

    var ans = 1;

    for (var i = 1; i <= n; i++) {
        ans = b * ans;
    }

    return ans;
}

console.log(exponent(2, 3));
