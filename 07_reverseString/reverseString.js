const reverseString = function (str) {
	let newStr = '';
	for (let i = str.length; i > -1; i--) {
		newStr = newStr.concat(str.charAt(i));
	}
	return newStr;
};

// Do not edit below this line
module.exports = reverseString;
