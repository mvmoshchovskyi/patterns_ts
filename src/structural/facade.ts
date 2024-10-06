class DvdPlayer {
	turnOn() { console.log('DVD player is on'); }
	play() { console.log('Playing movie'); }
}

class Projector {
	turnOn() { console.log('Projector is on'); }
}

class SoundSystem {
	turnOn() { console.log('Sound system is on'); }
	setVolume(level: number) { console.log(`Volume set to ${level}`); }
}

class Lights {
	dim() { console.log('Lights dimmed'); }
}

class HomeTheaterFacade {
	private dvdPlayer: DvdPlayer;
	private projector: Projector;
	private soundSystem: SoundSystem;
	private lights: Lights;

	constructor() {
		this.dvdPlayer = new DvdPlayer();
		this.projector = new Projector();
		this.soundSystem = new SoundSystem();
		this.lights = new Lights();
	}

	startMovie() {
		console.log('Starting the movie setup...');
		this.dvdPlayer.turnOn();
		this.projector.turnOn();
		this.soundSystem.turnOn();
		this.soundSystem.setVolume(5);
		this.lights.dim();
		this.dvdPlayer.play();
	}
}

const homeTheater = new HomeTheaterFacade();
homeTheater.startMovie();
