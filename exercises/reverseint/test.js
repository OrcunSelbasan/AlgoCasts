const reverseInt = require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0, '1')).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});

test('ReverseInt flips a positive number [CASE 1]', () => {
  expect(reverseInt(5, '1')).toEqual(5);
  expect(reverseInt(15, '1')).toEqual(51);
  expect(reverseInt(90, '1')).toEqual(9);
  expect(reverseInt(2359, '1')).toEqual(9532);
});

test('ReverseInt flips a negative number [CASE 1]', () => {
  expect(reverseInt(-5, '1')).toEqual(-5);
  expect(reverseInt(-15, '1')).toEqual(-51);
  expect(reverseInt(-90, '1')).toEqual(-9);
  expect(reverseInt(-2359, '1')).toEqual(-9532);
});
