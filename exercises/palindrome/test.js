const palindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

test('"aba" is a palindrome [CASE 1]', () => {
  expect(palindrome('aba', '1')).toBeTruthy();
});

test('" aba" is not a palindrome [CASE 1]', () => {
  expect(palindrome(' aba', '1')).toBeFalsy();
});

test('"aba " is not a palindrome [CASE 1]', () => {
  expect(palindrome('aba ', '1')).toBeFalsy();
});

test('"greetings" is not a palindrome [CASE 1]', () => {
  expect(palindrome('greetings', '1')).toBeFalsy();
});

test('"1000000001" a palindrome [CASE 1]', () => {
  expect(palindrome('1000000001', '1')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome [CASE 1]', () => {
  expect(palindrome('Fish hsif', '1')).toBeFalsy();
});

test('"pennep" a palindrome [CASE 1]', () => {
  expect(palindrome('pennep', '1')).toBeTruthy();
});

test('"" a palindrome, [EMPTY STRING] [CASE 1]', () => {
  expect(palindrome('', '1')).toBeTruthy();
});

test('"aba" is a palindrome [CASE 2]', () => {
  expect(palindrome('aba', '2')).toBeTruthy();
});

test('" aba" is not a palindrome [CASE 2]', () => {
  expect(palindrome(' aba', '2')).toBeFalsy();
});

test('"aba " is not a palindrome [CASE 2]', () => {
  expect(palindrome('aba ', '2')).toBeFalsy();
});

test('"greetings" is not a palindrome [CASE 2]', () => {
  expect(palindrome('greetings', '2')).toBeFalsy();
});

test('"1000000001" a palindrome [CASE 2]', () => {
  expect(palindrome('1000000001', '2')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome [CASE 2]', () => {
  expect(palindrome('Fish hsif', '2')).toBeFalsy();
});

test('"pennep" a palindrome [CASE 2]', () => {
  expect(palindrome('pennep', '2')).toBeTruthy();
});