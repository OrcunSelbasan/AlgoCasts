// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n, solution) {
	switch (solution) {
		case '1':
			let reversedInt = 0;

			while (n != 0) {
				console.log('s')
				reversedInt = (reversedInt * 10) + (n % 10); 
				n = parseInt(n / 10);
			}

			return reversedInt;
		default:
			let reversedStr = n.toString().split('').reverse().join('');
			return Math.sign(n)*parseInt(reversedStr);
	}
}

module.exports = reverseInt;
