import { logSuccess, logSum, multiplication } from './utils.js';

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
abstract class Persona {

    static nazione = 'Italia';

    constructor(protected readonly nome: string, protected cognome: string) { }

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    abstract greet(): void

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    }

    getNation() {
        return Persona.nazione;
    }

};

console.log("Nazione di persona:", Persona.nazione);

let mario: Persona

// WE CAN NOT DECLARE ISTANCES OF ABSTRACT CLASSES

// mario = new Persona("Mario", "Rossi");

// console.log("Nazione di Mario:", mario.getNation());

// const luca = new Persona("Luca", "Gialli");

// console.log('full name:', luca.getFullName());

// mario.greet();

/* console.log(
    luca.welcome(mario)
); */

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

    // WE NEED TO DECLARE THE LOGIC OF THE ABSTRACT METHOD
    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

};

let marco = new Studente('Marco', 'Verdi', 0o1234);

console.log(marco.getStudentData());

// SINGLETON
class Preside {
    private static instance: Preside;

    constructor(private nome: string, private cognome: string) { };

    static getInstance() {
        // IF THE INSTANCE IS ALREADY DEFINED, RETURN IT
        if (Preside.instance) {
            return this.instance;
        }
        // IF NOT, CREATE A NEW INSTANCE WITH HARDCODED DATA
        this.instance = new Preside('Giovanni', 'Blu');
        return this.instance;
    };

    greet() {
        console.log(`Sono il Preside ${this.nome}, ${this.cognome}`);

    };

};

Preside.getInstance().greet();

// INTERFACES
abstract class Device {

    constructor(protected nome: string, protected year: number) { };

    abstract turnOn(): void;
    abstract turnOff(): void;

    getYear() {
        console.log(`Questo ${this.nome} è stato prodotto nel ${this.year}`);
    };

};

interface internetConnection {
    ip: string;
    connect(): void;
    disconnect(): void;
}

class Smarphone extends Device implements internetConnection {

    ip: string;

    constructor(nome: string, year: number, ip: string) {
        super(nome, year);
        this.ip = ip;
    };

    connect(): void {
        console.log(`${this.nome} si è connesso all'indirizzo IP ${this.ip}`);
    };

    disconnect(): void {
        console.log(`${this.nome} si è disconnesso dall'indirizzo IP ${this.ip}`);
    };

    turnOn(): void {
        console.log(`${this.nome} si accende`);
    };

    turnOff(): void {
        console.log(`${this.nome} si spegne`);
    };

}

let iphone = new Smarphone('iPhone', 2019, '192.158.1.38');

// Questo iPhone è stato prodotto nel 2019
iphone.getYear();

// iPhone si accende
iphone.turnOn();

// iPhone si è connesso all'indirizzo IP 123.456.789
iphone.connect();

// iPhone si è disconnesso dall'indirizzo IP 123.456.789
iphone.disconnect();

// iPhone si spegne
iphone.turnOff();

// INTERFACE EXTENSION
interface connectionType extends internetConnection {
    connectType: string;
};

class Computer extends Device implements connectionType {

    connectType: string;
    ip: string;

    constructor(nome: string, year: number, ip: string, connectionType: string) {
        super(nome, year);
        this.connectType = connectionType;
        this.ip = ip;
    };

    connect(): void {
        console.log(`${this.nome} si è connesso all'indirizzo IP ${this.ip}`);
    };

    disconnect(): void {
        console.log(`${this.nome} si è disconnesso dall'indirizzo IP ${this.ip}`);
    };

    turnOn(): void {
        console.log(`${this.nome} si accende`);
    };

    turnOff(): void {
        console.log(`${this.nome} si spegne`);
    };

};

let macBook = new Computer('Macbook', 2017, '192.158.1.38', 'WiFi');

// WiFi
console.log(macBook.connectType);

// GENERICS TYPES

// WE CAN DECLARE THE DESIRED TYPE OF VALUES
const arr: Array<string> = ['string1', 'string2'];

// T IS A BUILT-IN TYPE THAT DEFINES A GENERIC TYPE
// THIS WAY IT WILL GENERATE A GENERIC ARRAY OF THE SAME TYPE
function newArray<T>(items: T[]) {
    return new Array().concat(items);
};

// IT WILL TAKE VIA INFERENCE NUMBER AS TYPE
// function newArray<number>(items: number[]): any[]
const arr1 = newArray([1, 2, 3]);

// IT WILL TAKE VIA INFERENCE STRING AS TYPE
// function newArray<string>(items: string[]): any[]
const arr2 = newArray(['a', 'b', 'c']);

// IT WILL TAKE VIA INFERENCE STRING OR NUMBER UNION AS TYPE
// function newArray<string | number>(items: (string | number)[]): any[]
const arr3 = newArray(['a', 'b', 3]);

// THIS WAY IT WILL ACCEPT ONLY NUMBERS AS PARAMETERS
const arr4 = newArray<number>([1, 2, 3]);

const arr5 = newArray<number | string | boolean>([1, 'a', true]);

// WE CAN DECLARE A CLASS THAT ACCEPT GENERIC VALUES THAT WILL BE TYPIZED BY INFERENCE
class List<T> {

    // IT HAS A GENERIC ARRAY HAS PRIVATE PROPERTY
    private list: T[] = [];

    addItem(item: T): void {
        this.list.push(item);
    };

    removeItem(item: T): void {
        this.list.splice(this.list.indexOf(item, 1));
    };
};

// AS WE CREATE A NEW ISTANCE, ALL TYPES WILL BE CHANGED BY INFERENCE
const list = new List<number>();

// IT WILL ACCEPT ONLY NUMBERS AS ARGUMENTS NOW
// (method) List<number>.addItem(item: number): void
// Argument of type 'string' is not assignable to parameter of type 'number'.
list.addItem(1);

// DECORATORS
function createHtmlElement(template: string, id: string, text: string) {

    return function (constructor: any) {

        const container = document.getElementById(id);
        const element = document.createElement(template);
        const content = new constructor(text);

        if (container) {
            container.appendChild(element);
            element.textContent = content.text;
        }

    };

};

@createHtmlElement('h1', 'container', 'DECORATORS TEST')
class DecoTextH1 {
    constructor(public text: string) { };
};

@createHtmlElement('p', 'container', 'DECORATORS TEST')
class DecoTextP {
    constructor(public text: string) { };
};

function propertyDecorator(target: any, property: string) {
    console.log("Property decorator executed. Property is:", property, " Target Class is:", target);
}

/* class MyClass {
    @propertyDecorator
    myProperty: string;

    constructor(myProperty: string) {
        this.myProperty = myProperty;
    }
} */

function parameterDecorator(target: any, methodName: string, parameterIndex: number) {
    console.log(`Parameter decorator executed. Target: ${target}, Method: ${methodName}, Parameter Index: ${parameterIndex}`);
}

class MyClass {
    @propertyDecorator    
    myProperty: string;


    constructor(myProperty: string) {
        this.myProperty = myProperty;
    }

    getProperty(@parameterDecorator property: string) {
        property = this.myProperty;
        console.log(`Property: ${property}`);
    }
}

logSuccess();

logSum(5, 2);

console.log(`Your operation result is ${multiplication(5, 2)}`);