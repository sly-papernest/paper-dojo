const {getOver18, sortEmployee, capitalizeName} = require('./employee');

const employeesData = [
	{ name: 'Max', age: 17 },
	{ name: 'Sepp', age: 18 },
	{ name: 'Nina', age: 15 },
	{ name: 'Mike', age: 51 },
	{ name: 'Martin', age: 35}
];

test('getOver18 should return only people with age equal or over 18', () => {
	const expected = [
		{ name: 'Sepp', age: 18 },
		{ name: 'Mike', age: 51 },
		{ name: 'Martin', age: 35}
	]

	const result = getOver18(employeesData);
  expect(result).toStrictEqual(expected);
});


test('sortEmployee should return the list of employees sorted by their names', () => {
	const expected = [
		{ name: 'Martin', age: 35},
		{ name: 'Max', age: 17 },
		{ name: 'Mike', age: 51 },
		{ name: 'Nina', age: 15 },
		{ name: 'Sepp', age: 18 },
	]

	const result = sortEmployee(employeesData);
  expect(result).toStrictEqual(expected);
});


test('capitalizeName should return the list of the employees names capitalized', () => {
	const expected = [
		{ name: 'MAX', age: 17 },
		{ name: 'SEPP', age: 18 },
		{ name: 'NINA', age: 15 },
		{ name: 'MIKE', age: 51 },
		{ name: 'MARTIN', age: 35}
	]

	const result = capitalizeName(employeesData);
  expect(result).toStrictEqual(expected);
});