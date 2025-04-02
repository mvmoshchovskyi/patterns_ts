// let user = {
// 	name: "Іван"
// };
//
// function wrap(target) {
// 	return new Proxy(target, {
// 		get(target, prop, receiver) {
// 			if (prop in target) {
// 				return Reflect.get(target, prop, receiver);
// 			}
// 			throw new Error(`${prop} is not an object`);
// 		}
// 	});
// }
//
// user = wrap(user);
//
// console.log(user.name); // Іван
// try {
// 	user.age; // ReferenceError: Властивість не існує: "age"
// } catch(e) {
// 	console.log(e.message);
// }
//

let array = [1, 2, 3];

array = new Proxy(array, {
	get(target, prop, receiver) {
		if (prop < 0) {
			prop = target.length + +prop;
		}
		return Reflect.get(target, prop, receiver);
	}
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
