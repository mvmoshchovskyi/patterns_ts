interface ICoffee {
	cost(): number;

	description(): string;
}

class SimpleCoffee implements ICoffee {
	cost(): number {
		return 7;
	}

	description(): string {
		return "Tasty coffee";
	}
}

abstract class CoffeeDecorator implements ICoffee {
	constructor(protected coffee: ICoffee) {}

	abstract cost(): number;
	abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
	cost(): number {
		return this.coffee.cost() + 2;
	}

	description(): string {
		return this.coffee.description() + ", with milk";
	}
}

class SugarDecorator extends CoffeeDecorator {
	cost(): number {
		return this.coffee.cost() + 0.5;
	}

	description(): string {
		return this.coffee.description() + ", with sugar";
	}
}

const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.description() + " costs " + simpleCoffee.cost());

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(milkCoffee.description() + " costs " + milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(sugarMilkCoffee.description() + " costs " + sugarMilkCoffee.cost());
