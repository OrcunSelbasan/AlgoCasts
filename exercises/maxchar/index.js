// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str, solution) {
	charMap = {};
	let max = 0;
	let maxChar = '';

	switch (solution) {
		case '1': // If more than 1 maxChar, returns first
			for (let char of str) {
				if(charMap[char]) {
					charMap[char]++
					[max, maxChar] = charMap[char] > max ? [charMap[char], char] : [max, maxChar];				
				} else {
					charMap[char] = 1;
					[max, maxChar] = max === 0 && maxChar === '' ? [charMap[char], char] : [max, maxChar];
				}
			}
			return maxChar;
		default: // If more than 1 maxChar, returns last
			for (let char of str) {
				charMap[char] = charMap[char] + 1 || 1;
			}
			for (let char in charMap) {
				if (charMap[char] > max) {
					max = charMap[char];
					maxChar = char;
				}
			}

			return maxChar;
	}
}

module.exports = maxChar;
