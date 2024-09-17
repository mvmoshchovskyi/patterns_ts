interface IUser {
    name: string;
    age: number;
}

type keyOfUser = keyof IUser;

const key: keyOfUser = 'age';

const  getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key]
}

const user: IUser = {
    name: 'misha',
    age: 20,
}

getValue(user, 'name')
