// OBJECTS
let tsObject2: object;

tsObject2 = {
    name: "Mario",
    age: 30,
    isMarried: false,
    address: { city: 'Roma', number: 30, street: 'Via Milano' }
};

let tsObject3: {
    name: string,
    age: number,
    isMarried: boolean
};

tsObject3 = {
    name: "Mario",
    age: 30,
    isMarried: false
};

// TUPLES
let tuple: [number, number];

tuple = [2, 7];

// UNIONS
let unionTs2: string | number | string[] = 'a string';

// ALIASES
type Person = {
    name: string,
    age: number,
    isMarried: boolean
    address: { city: string, number: number, street: string }
};

let user: Person;

user = {
    name: 'Mario',
    age: 30,
    isMarried: false,
    address: { city: 'Roma', number: 30, street: 'Via Milano' }
};

type Test = string | number;

let customTest: Test = 'true';

// ENUM

enum Role {
    ADMIN = 10,
    USER,
    GUEST = 'guest'
};

let enumUser = {
    name: 'Mario',
    age: 30,
    role: Role.ADMIN
}

type User = {
    name: string,
    age: number,
    isMarried: boolean,
    address: {city: string, number: number, street: string},
    role: Role
};

let testUser1: User = {
    name: 'Mario',
    age: 30,
    isMarried: false,
    address: { city: 'Roma', number: 30, street: 'Via Milano'
    },
    role: Role.ADMIN
}

// FUNCTIONS
function somma(a: number, b: number) {
    return a + b
};
console.log(somma(3, 5));

// WE CAN DECLARE THE EXPECTED TYPE ON A FUNCTION PARAMETER
function getPerson(user: Person) {
    // WE CAN ACCESS THE PROPERTIES OF THE PARAMETERS
    console.log(`USER ID: ${user.name}`);
}