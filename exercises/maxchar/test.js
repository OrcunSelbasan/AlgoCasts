const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

test('Finds the most frequently used char [CASE 1]', () => {
  expect(maxChar('a', '1')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa', '1')).toEqual('a');
});

test('Works with numbers in the string [CASE 1]', () => {
  expect(maxChar('ab1c1d1e1f1g1', '1')).toEqual('1');
});

test('Finds the most frequently used char in 10 number string [CASE 1]', () => {
  expect(maxChar('a', '1')).toEqual('a');
  expect(maxChar('Gkow59gPcVtcuA51Oyvf', '1')).toEqual('c');
  expect(maxChar('82904176877', '1')).toEqual('7');
  expect(maxChar('0503962374', '1')).toEqual(maxChar('0503962374'));
  expect(maxChar('2253789554', '1')).toEqual(maxChar('2253789554'));
  expect(maxChar('2031790475', '1')).toEqual(maxChar('2031790475'));
  expect(maxChar('3764895388', '1')).toEqual(maxChar('3764895388'));
  expect(maxChar('3693991841', '1')).toEqual(maxChar('3693991841'));
  expect(maxChar('6903331032', '1')).toEqual(maxChar('6903331032'));
  expect(maxChar('9630801230', '1')).toEqual(maxChar('9630801230'));
  expect(maxChar('2795860322', '1')).toEqual(maxChar('2795860322'));
});
