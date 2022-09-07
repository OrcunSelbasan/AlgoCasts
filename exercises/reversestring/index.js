// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str, solution) {
	switch (solution) {
		case '1':
			return str.split('').reverse().join('');
		case '2':
			let reversed = '';

			for (let char of str) {
				reversed = char + reversed;
			}

			return reversed;
		case '3':
			return str.split('').reduce((reversed, char) => char + reversed, '');
		default:
			const arr = str.split('');
			arr.reverse();
			return arr.join('');
	}
}

module.exports = reverse;
