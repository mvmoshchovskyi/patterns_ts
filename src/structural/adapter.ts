interface ICalculator {
	add(a: number, b: number): number;
	subtract(a: number, b: number): number;
	multiply(a: number, b: number): number;
	divide(a: number, b: number): number;
}

enum Method {
	ADD = 'addNumbers',
	SUBTRACT = 'subtractNumbers',
	MULTIPLY = 'multiplyNumbers',
	DIVIDE = 'divideNumbers',
}

class OldCalculator {
	execute(method: Method, a: number, b: number): number {
		switch (method) {
			case Method.ADD:
				return a + b;
			case Method.SUBTRACT:
				return a - b;
			case Method.MULTIPLY:
				return a * b;
			case Method.DIVIDE:
				if (b === 0) throw new Error("Cannot divide by zero");
				return a / b;
			default:
				throw new Error("Invalid method");
		}
	}
}

class NewCalculator implements ICalculator {
	private oldCalculator: OldCalculator;

	constructor(oldCalculator: OldCalculator) {
		this.oldCalculator = oldCalculator;
	}

	add(a: number, b: number): number {
		return this.oldCalculator.execute(Method.ADD, a, b);
	}

	divide(a: number, b: number): number {
		return this.oldCalculator.execute(Method.DIVIDE, a, b);
	}

	multiply(a: number, b: number): number {
		return this.oldCalculator.execute(Method.MULTIPLY, a, b);
	}

	subtract(a: number, b: number): number {
		return this.oldCalculator.execute(Method.SUBTRACT, a, b);
	}
}

const oldCalculator = new OldCalculator();
const newCalculator = new NewCalculator(oldCalculator);

console.log(newCalculator.add(5, 3));
console.log(newCalculator.subtract(5, 3));
console.log(newCalculator.multiply(5, 3));
console.log(newCalculator.divide(6, 2));
// console.log(newCalculator.divide(6, 0));
