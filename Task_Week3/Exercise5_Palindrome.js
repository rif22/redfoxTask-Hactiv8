function palindrome(kata) {
	
	var reverse = ''
		for (var i = 0; i < kata.length; i++) {
			reverse = kata[i] + reverse
	}
	return reverse === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false