const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string [CASE 1]', () => {
  expect(reverse('abcd', '1')).toEqual('dcba');
});

test('Reverse reverses a string [CASE 1]', () => {
  expect(reverse('  abcd', '1')).toEqual('dcba  ');
});

test('Reverse reverses a string [CASE 2]', () => {
  expect(reverse('abcd', '2')).toEqual('dcba');
});

test('Reverse reverses a string [CASE 2]', () => {
  expect(reverse('  abcd', '2')).toEqual('dcba  ');
});

test('Reverse reverses a string [CASE 3]', () => {
  expect(reverse('abcd', '3')).toEqual('dcba');
});

test('Reverse reverses a string [CASE 3]', () => {
  expect(reverse('  abcd', '3')).toEqual('dcba  ');
});


