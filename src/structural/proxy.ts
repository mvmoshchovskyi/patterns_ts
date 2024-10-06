interface IImage {
	display(): void
}

class RealImage implements IImage {
	constructor(private filename: string) {
		this.loadFromDisk();
	}

	loadFromDisk(){
		console.log(`Loading image ${this.filename} from disk`);
	}
	display() {
		console.log(`display image ${this.filename}`);
	}
}

class ProxyRealImage implements IImage {
	private realImage: RealImage | null = null;
	constructor(private filename: string) {}

	display(): void {
		if(!this.realImage){
			this.realImage = new RealImage(this.filename);
		}
		this.realImage.display();
	}
}

const img = new ProxyRealImage('large_img.jpg');
img.display();  // load only first time
img.display();
