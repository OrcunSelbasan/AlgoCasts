// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str, solution) {
	switch (solution) {		
		case '1':
			return str.split('').every((char, index) => {
				return char === str[str.length - index - 1];
			});

			break;
		case '2':
			let length = str.length;
  			if (length === 0 || length === 1) {
  			  return true;
  			}
  			if (str[0] === str[length - 1]) {
  			  return palindrome(str.slice(1, length - 1), '2');
  			}  
  			return false;
		default:
			const reversed = str.split('').reverse().join('')

			return str === reversed;
	};
}

module.exports = palindrome;
