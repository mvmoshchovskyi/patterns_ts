// 1
// Array.prototype.last = function() {
// 	if( !this.length ) return -1
// 	return this[this.length - 1]
// };
//
//
// const arr = [1, 2, 3];
// console.log(arr.last());

// 2

const arr = [1,2,3];
function plusI(n, i) { return n + i; }

var map = function(arr, fn) {
	if(!arr.length) return [];
	let newArr = [];

	for(let i = 0; i < arr.length; i++) {
		const el = parseInt(arr[i]);
		newArr.push(fn(el,i))
	}

	return newArr;
};

const newArray = map(arr, plusI);
console.log(newArray);
