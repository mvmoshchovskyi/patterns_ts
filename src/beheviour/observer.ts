interface Observer {
	update(news: string): void;
}

interface Subject {
	addObserver(observer: Observer): void;
	removeObserver(observer: Observer): void;
	notifyObservers(): void;
}

class NewsChannel implements Subject {
	private observers: Observer[] = [];
	private latestNews: string = '';

	addObserver(observer: Observer): void {
		this.observers.push(observer);
	}

	removeObserver(observer: Observer): void {
		// const index = this.observers.indexOf(observer);
		// if (index !== -1) {
		// 	this.observers.splice(index, 1);
		// }
		this.observers = this.observers.filter(sub => sub !== observer);
	}

	setNews(news: string): void {
		this.latestNews = news;
		this.notifyObservers();
	}

	notifyObservers(): void {
		this.observers.forEach(observer => {
			observer.update(this.latestNews);
		})
	}
}

class NewsSubscriber implements Observer {
	constructor(private name: string) {}

	update(news: string): void {
		console.log(`${this.name} get news: ${news}`);
	}
}

const newsChannel = new NewsChannel();

const subscriber1 = new NewsSubscriber('user 1');
const subscriber2 = new NewsSubscriber('user 2');

newsChannel.addObserver(subscriber1);
newsChannel.addObserver(subscriber2);

newsChannel.setNews('new article about patterns');
