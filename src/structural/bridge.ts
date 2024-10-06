interface IDevice {
	setPower(): void;
	getVolume(): number;
	setVolume(volume: number): void;
}

class TV implements IDevice {
	private enabled = false;
	private volume = 10;

	setPower(): void {
		this.enabled = !this.enabled;
		console.log(`TV is ${this.enabled ? 'enabled' : 'disabled'}`);
	}

	getVolume() {
		return this.volume;
	}

	setVolume(volume: number): void {
		if (this.enabled) {
			this.volume = volume;
			console.log(`TV volume is set to ${volume}`);
		} else {
			console.log('TV is off, cannot set volume');
		}
	}
}

class Radio implements IDevice {
	private enabled = false;
	private volume = 30;

	setPower(): void {
		this.enabled = !this.enabled;
		console.log(`Radio is ${this.enabled ? 'enabled' : 'disabled'}`);
	}

	getVolume() {
		return this.volume;
	}

	setVolume(volume: number): void {
		if (this.enabled) {
			this.volume = volume;
			console.log(`Radio volume is set to ${volume}`);
		} else {
			console.log('Radio is off, cannot set volume');
		}
	}
}

interface IRemoteControl {
	togglePower(): void;
	volumeUp(): void;
	volumeDown(): void;
}

class RemoteControl implements IRemoteControl{
	constructor(protected device: IDevice) {}

	togglePower(){
		this.device.setPower()
	}

	volumeUp(){
		let volume = this.device.getVolume();
		this.device.setVolume(volume + 10);
	}

	volumeDown(){
		let volume = this.device.getVolume();
		this.device.setVolume(volume - 10);
	}
}

const tv = new TV();
const radio = new Radio();

const remoteForTV = new RemoteControl(tv);
remoteForTV.togglePower()
remoteForTV.volumeUp()

const remoteForRadio = new RemoteControl(radio);
// remoteForRadio.togglePower()
remoteForRadio.volumeDown()


////////
// interface IFigure {
// 	calculateArea(): number
// }
//
// class Circle implements IFigure {
// 	constructor(private readonly radius: number) {}
//
// 	calculateArea() {
// 		return Math.PI * Math.pow(2, this.radius);
// 	}
// }
//
// class Square implements IFigure {
// 	constructor(private readonly side: number) {}
//
// 	calculateArea() {
// 		return Math.pow(2, this.side);
// 	}
// }
//
// interface IColoring {
// 	getColor(): string;
// 	setColor(color: string): void;
// 	getColoringFigure(): string
// }
//
// class Color implements IColoring{
// 	constructor(private figure: IFigure, private color: string) {}
//
// 	setColor(color: string) {
// 		this.color = color;
// 	}
//
// 	getColor(): string {
// 		return this.color;
// 	}
//
// 	getColoringFigure(){
// 		return `Figure with area ${this.figure.calculateArea()} has ${this.color} color`
// 	}
// }
//
//
// const circle = new Circle(7);
// const coloredCircle = new Color(circle, 'red');
// console.log(coloredCircle.getColoringFigure())
//
// const square = new Square(5);
// const coloredSquare = new Color(square, 'yellow');
// console.log(coloredSquare.getColoringFigure())
