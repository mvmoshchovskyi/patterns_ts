class User {
	constructor(public githubToken: string = '', public googleToken: string = '') {
	}
}

interface IAuthStrategy {
	auth(user: User): boolean;
}

class GoogleStrategy implements IAuthStrategy {
	auth(user: User): boolean {
		if (user.googleToken) {
			return true;
		} else {
			return false;
		}
	}
}

class GithubStrategy implements IAuthStrategy {
	auth(user: User): boolean {
		if (user.githubToken) {
			return true;
		} else {
			return false;
		}
	}
}

class Auth {
	constructor(private strategy: IAuthStrategy) {
	}

	setStrategy(strategy: IAuthStrategy): void {
		this.strategy = strategy;
	}

	authUser(user: User): boolean {
		return this.strategy.auth(user);
	}
}

const user = new User();
user.githubToken =' githubToken';

const auth = new Auth(new GoogleStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GithubStrategy());
console.log(auth.authUser(user));

