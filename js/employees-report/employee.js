const employeesData = [
	{ name: 'Max', age: 17 },
	{ name: 'Sepp', age: 18 },
	{ name: 'Nina', age: 15 },
	{ name: 'Mike', age: 51 },
	{ name: 'Martin', age: 35}
];

function getOver18 (listEmployee) {
	const result = listEmployee.filter(employee => employee.age >= 18);
	return result;
}

function sortEmployee (listEmployee) {
	const listEmployeeCopy = JSON.parse(JSON.stringify(listEmployee));
	function compare(a, b) {
		if (a.name < b.name) {
			return -1;
		} else if (a.name > b.name) {
			return 1;
		} else {
			return 0;
		}
	}
	//const result = ;
	return listEmployeeCopy.sort(compare);
}

function capitalizeName (listEmployee) {
	const result = [];
	
	for (const element of listEmployee) {
		const upperCaseName = element.name.toUpperCase();
		element.name = upperCaseName;
		result.push(element);
	}
	return result;
}

function all(listEmployee) {
	const list = getOver18(listEmployee);
	const list2 = sortEmployee(list);
	return capitalizeName(list2);
}

module.exports = {getOver18, sortEmployee, capitalizeName};