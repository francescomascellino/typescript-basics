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
    address: { city: string, number: number, street: string },
    role: Role
};

let testUser1: User = {
    name: 'Mario',
    age: 30,
    isMarried: false,
    address: {
        city: 'Roma', number: 30, street: 'Via Milano'
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

// IF WE ASSIGN A DEFAULT VALUE TO A PARAMETER, TS INFERENCE WILL ASSIGN THE TYPE OF THAT VALUE TO THE PARAMETER. (parameter) b: number
function somma2(a: number, b = 3) {
    return a + b
};

// OPTIONAL PARAMETERS
function tenCheck(a: number, b = 3): any {
    if ((a + b) > 10) {
        return 'sum is > 10'
    } else {
        return 'sum is < 10'
    }
};

// VOID FUNCTION
function somma3(a: number, b = 3): void {
    console.log(a + b);
};

let sommaVar: Function = somma3;

let sommaVar2: (a: number, b: number) => number;

sommaVar2 = somma2;

// CLASSES
class Persona {

    static nazione = 'Italia';

    constructor(protected readonly nome: string, protected cognome: string) { }

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    }

    getNation() {
        return Persona.nazione;
    }

};

console.log("Nazione di persona:", Persona.nazione);

let mario: Persona

mario = new Persona("Mario", "Rossi");

console.log("Nazione di Mario:", mario.getNation());

const luca = new Persona("Luca", "Gialli");

console.log('full name:', luca.getFullName());

mario.greet();

console.log(
    luca.welcome(mario)
);


// CHILD CLASSES
class Studente extends Persona {
    constructor(
        nome: string,
        cognome: string,
        private matricola: number
    ) {
        super(nome, cognome);
    };

    getStudentData(): string {
        return `Nome: ${this.nome}, Cognome: ${this.cognome} - Matr: ${this.matricola}`;
    };

    changeEnrCode(code: number) {
        this.matricola = code;
    }

};

let marco = new Studente('Marco', 'Verdi', 0o1234);

console.log(marco.getStudentData());

