// class Tree {
// 	constructor(public type: string, public color: string, public x: number, public y: number) {}
//
// 	display() {
// 		console.log(`Displaying ${this.type} tree of ${this.color} at (${this.x}, ${this.y})`);
// 	}
// }
//
// // Створюємо багато дерев
// const trees: Tree[] = [];
// for (let i = 0; i < 10000; i++) {
// 	trees.push(new Tree('Oak', 'Green', Math.random() * 1000, Math.random() * 1000));
// }

class TreeType {
	constructor(public name: string, public color: string) {}

	display(x: number, y: number) {
		console.log(`Displaying ${this.name} tree of ${this.color} at (${x}, ${y})`);
	}
}

// Фабрика Легковаговиків
class TreeFactory {
	private static treeTypes: { [key: string]: TreeType } = {};

	static getTreeType(name: string, color: string): TreeType {
		const key = `${name}_${color}`;
		if (!this.treeTypes[key]) {
			this.treeTypes[key] = new TreeType(name, color);
		}
		return this.treeTypes[key];
	}
}

// Клас дерева, яке містить лише координати
class Tree {
	constructor(private x: number, private y: number, private treeType: TreeType) {}

	display() {
		this.treeType.display(this.x, this.y);
	}
}

// Використання Легковаговика
const trees: Tree[] = [];
for (let i = 0; i < 10000; i++) {
	const treeType = TreeFactory.getTreeType('Oak', 'Green');
	trees.push(new Tree(Math.random() * 1000, Math.random() * 1000, treeType));
}

// Виведення дерев
trees.forEach(tree => tree.display());
