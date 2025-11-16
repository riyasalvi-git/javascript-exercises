const removeFromArray = function (arr, ...values) {
	let result = arr.filter(word => !values.includes(word));
	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
