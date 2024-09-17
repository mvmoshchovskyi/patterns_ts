const person = {
    nane: 'max',
    age: 18,
}

type keyOfPerson = keyof typeof person;

enum Direction {
    UP, DOWN
}

type dir = keyof typeof Direction;
