# INSTALL TYPESCRIPT GLOBALLY
```bash
npm i typescript -g
```

# LINK SCRIPT FILE
```html
<script src="./app.js" type="text/javascript"></script>
```

# ADD TS CODE
```ts
// app.ts
// WE USE TYPE ASSIGNMENT WHEN WE DECLARE PARAMETERS
function somma(a: number, b: number) {
    return a + b
};
console.log(somma(3, 5));
```

# TS DATA TYPES
Basic data types:
- String
- Number
- Boolean

Custom data types:
- Array
```ts
let tsArray: [];
let tsArray2: array;
let tsArray3: string[];
let tsArray5: number[];
let tsArray6: any[];
```
- Object
```ts
let tsObject: {};
let tsObject2: object;

 //👇 Type 'string' is not assignable to type 'object'👇
tsObject2 = 'mario'; // ❌

// ✔️ OK
tsObject2 = {
    name: "Mario",
    age: 30,
    isMarried: false,
    address: {city: 'Roma', number: 30, street: 'Via Milano'}
};

// WE CAN DECLARE THE EXPECTED OBJECT STRUCTURE
let tsObject3: {
    name: string,
    age: number,
    isMarried: boolean
};

// WE CAN NOT CHANGE VALUE TYPES
tsObject3 = {
    name: "Mario",
    //👇 Type 'string' is not assignable to type 'number' 👇
    age: 'trenta', // ❌
    isMarried: false
};

// WE CAN NOT ADD UNDECLARED PROPERTIES
tsObject3 = {
    name: "Mario",
    age: 30,
    isMarried: false,
    //👇 Object literal may only specify known properties, and 'address' does not exist in type '{ name: string; age: number; isMarried: boolean; }'. 👇
    address: {city: 'Roma', number: 30, street: 'Via Milano'} // ❌
};

// WE CAN DECLARE AN EXPECTED OBJECT STRUCTURE ON A FUNCTION PARAMETER
function getData(data: {id: number; username: string; passwod: string}) {
    // WE CAN ACCESS THE PROPERTIES OF THE PARAMETERS
    console.log(`USER ID: ${data.id}`);
};
```
- Tuple (fixed length array)
```ts
// IT WILL EXPECT AN ARRAY CONTAINING ONLY 2 VALUES TYPE NUMBER
let tuple : [number, number];

//👇 Type 'string' is not assignable to type 'number'. 👇
tuple = ['carl', 2]; // ❌

//👇 Type '[number, number, number]' is not assignable to type '[number, number]'. Source has 3 element(s) but target allows only 2. 👇
tuple = [1, 2, 3]; // ❌

```

Advanced data types:
- Any
- Void
- Null
- Undefined
- Never
- Union (used to assign multyple data types)
```ts
//👇 Type 'boolean' is not assignable to type 'string | number'. 👇
let unionTs: string | number = 'a string'; // ❌

let unionTs2: string | number | string[]= 'a string';
```
- Type Aliases (custom data types)
```ts
type Person = {
    name: string,
    age: number,
    isMarried: boolean
    address: {city: string, number: number, street: string}
};

let user: Person;

user = {
    name: 'Mario',
    age: 30,
    isMarried: false,
    address: {city: 'Roma', number: 30, street: 'Via Milano'}
};

type Test = string | number;

//👇 Type 'boolean' is not assignable to type 'Test'. 👇
let customTest: Test = true; // ❌

// ✔️
let customTest: Test = 'true';

// WE CAN DECLARE THE EXPECTED TYPE ON A FUNCTION PARAMETER
function getPerson(user: Person) {
    // WE CAN ACCESS THE PROPERTIES OF THE PARAMETERS
    console.log(`USER ID: ${user.name}`);
};
```
- Enum
```ts
// WE CAN DECLARE THE EXPECTED VALUES LIST THANKS TO ENUM
enum Role {
    ADMIN,
    USER,
    GUEST
};

let enumUser = {
    name: 'Mario',
    age: 30,
    role: Role.ADMIN
}

// EXAMPLE OF USE
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

// ENUM ASSIGNS AN INDEX ON EACH ENTRY. WE CAN EDIT THIS INDEX AND ASSIGN IT TO A NEW NUMERIC VALUE OR STRING:
enum Role {
    ADMIN = 10,
    USER, // THIS WILL BE (enum member) Role.USER = 11
    GUEST = 'guest' // (enum member) Role.GUEST = "guest"
};
```

# FUNCTIONS
```ts
// IF WE ASSIGN A DEFAULT VALUE TO A PARAMETER, TS INFERENCE WILL ASSIGN THE TYPE OF THAT VALUE TO THE PARAMETER. (parameter) b: number
function somma2(a: number, b = 3) {
    return a + b
};
```
IF WE CHECK somma2 WE WILL SEE THAT TS EXPECTS A NUMBER, A SECOND NUMBER (OPTIONAL AS IT AS A DEFAULT) AND WILL RETURN A NUMBER AS RESULT
```
function somma2(a: number, b?: number): number
```
WE CAN ALSO DECLARE A TYPE OF THE RETURN VALUE IF NEEDED
```ts
function tenCheck(a: number, b = 3): any {
    if ((a+b) > 10 ) {
        return 'sum is > 10'
    } else {
        return 'sum is <= 10'
    }
};
```
THE BEST WAY TO WRITE THIS FUNCTION SHOULD BE
```ts
function somma3(a: number, b: number = 3): string {
    if ((a + b) > 10) {
        return 'La somma è > 10';
    } else {
        return 'La somma è <= 10';
    }
}
```
IF WE WILL NOT RETURN A VALUE, WE CAN DECLARE A RETURN TYPE OF VOID
```ts
function somma3(a: number, b = 3): void {
    console.log(a+b);
};
```
THIS WAY IF WE DECLARE A RETURN NOT VOID TS WILL WARN US
```ts
function somma3(a: number, b = 3): void {
    //👇 Type 'number' is not assignable to type 'void'. 👇
    return a + b // ❌
}
```
IF WE WANT TO ASSIGN A FUNCTION TO A VARIABLE, WE CAN ASSIGN THE TYPE FUNCTION AS WE DECLARE THE VARIABLE:
```ts
function somma3(a: number, b = 3): void {
    console.log(a+b);
};

let sommaVar: Function = somma3
```
WHEN ASSIGNING FUNCTIONS TO VARIABLES WE CAN SPECIFY WHAT KIND OF PARAMETERS AND RETURN WE ACCEPT
```ts
let sommaVar: (a: number, b: number) => number;
```
THIS WAY WE WILL GET NOTIFIED OF AN ERROR IF WE ASSIGN A FUNCTION WITH DIFFERENT PARAMETERS OR RETURN VALUES.
IF WE ASSIGN TO sommaVar A FUNCTION WITH A RETURN OF VOID FOR EXAMPLE, WE WILL GET:
```
Type '(a: number, b?: number) => void' is not assignable to type '(a: number, b: any, number: any) => number'.
Type 'void' is not assignable to type 'number'.
```

# COMPILE TS FILES WITH TYPESCRIPT COMPILER
```bash
tsc app.ts
```
This will create the app.js file:
```js
// app.js

// code

function somma(a, b) {
    return a + b;
}
;
console.log(somma(3, 5));

// ecc
```

WE CAN USE 
```bash
tsc app.ts --watch
```
OR
```bash
tsc app.ts -w
```
TO AUTOMATICALLY WATCH OUR .ts FILE FOR CHANGES AND UPDATE OUR .js FILE
```bash
[15:15:17] Starting compilation in watch mode...

[15:15:17] Found 0 errors. Watching for file changes.
```
IF WE USE
```bash
tsc --init
```
TS WILL CREATE A .json FILE AND THE COMPILER WILL AUTOMATICALLY MANAGE AND COMPILE .ts FILES
```
Created a new tsconfig.json with:                                                                     
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```
NOW AFTER USING --init WE CAN WATCH ALL FILES
```bash
tsc -w
```
WE CAN ADD AT THE END OF tsconfig.json AN ARRAY OF FILES/DIRECTORIES TO EXLUDE FROM OUR WATCH:
```json
// [.json file]

    },

    "exclude": [
        "node_modules",
        "./file-to-exclude.ts"
    ]

}
```
WE SHOULD DECLARE TO EXCLUDE node_modules IF WE USE "exclude" IN tsconfig.json.

IF WE WANT TO CHECK OUR SOURCE TYPESCRRIPT FILES WITH THE BROWSER DEVTOOLS WE HAVE TO ENABLE "sourceMap" ON tsconfig.json
```json
/* Create source map files for emitted JavaScript files. */
"sourceMap": true,
```

WE CAN SPECIFY A FOLDER CONTAINING OUR TS SOURCE FILES IN tsconfig.json:
```json
/* Specify the root folder within your source files. */
"rootDir": "./src",
```
AND A FOLDER FOR OUR COMPILED JS FILES
```json
/* Specify an output folder for all emitted files. */
"outDir": "./dist",
```
REMEMBER TO UPDATE THE SCRIPT PATH:
```html
<script src="./dist/app.js" type="text/javascript"></script>
```

# CLASSES
CLASSES WORK ALMOST THE SAME
```ts
class Persona {
    private nome: string;
    private cognome: string;
    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome
    };

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    };

    changeSurname(surname: string) {
        this.cognome = surname;
    };

};

let mario: Persona;

mario = new Persona("Mario", "Rossi");

const luca = new Persona("Luca", "Gialli");

// full name: Luca Gialli
console.log('full name:', luca.getFullName());

// Ciao, sono Mario Rossi
mario.greet();

// Benvenuto Mario Rossi!
console.log(
    luca.welcome(mario)
);
```

# CLASS PROPERTIES
## PRIVATE PROPERTIES
WE CAN DECLARE A PROPERTY AS PRIVATE SO WE CAN'T REASSIGN IT WITHOUT A METHOD
```ts
class Persona {
    private nome: string;
    private cognome: string;

    // ...

    changeSurname(surname: string) {
        this.cognome = surname;
    };

};
```
TS CAN AUTOMATICALLY DETECT CONSTRUCTOR PROPERTIES WHEN DECLARED
```ts
class Persona {

    constructor(private nome: string, private cognome: string) {}

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    };

};
```

(WE CAN ADD SOME ERROR MANAGEMENT INSIDE THE MUSTACHE BRACKETS CONTRUCTOR)
```ts
class Persona {

    constructor(private nome: string, private cognome: string) {
        if (!nome || !cognome) {
            throw new Error("Nome e cognome devono essere forniti.");
        }
    };

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    };

};
```

## READ ONLY PROPERTIES
WE CAN DECLARE A PROPERTY AS READ ONLY SO IT WE CAN ONLY READ BUT NOT CHANGE IT:
```ts
class Persona {

    constructor(private readonly nome: string, private cognome: string) {
    };

    // ...

};
```

## STATIC PROPERTIES
```ts
class Persona {

    static nazione: string = "Italia";

    constructor(private nome: string, private cognome: string) {
    };

    // GETTER
    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    };

    static getNazione(): string {
        return Persona.nazione;
    };

};
```

STATIC PROPERTIES CAN BE ACCESSED FROM THE CLASS ITSELF OR USING A GETTER METHOD:
```ts
console.log("Nazione di persona:", Persona.nazione);
// Nazione di persona: Italia

let mario: Persona

mario = new Persona("Mario", "Rossi");

console.log("Nazione di Mario:", mario.getNation());
// Nazione di Mario: Italia
```

## CHILD CLASSES
PRIVATE PROPERTIES CAN BE ACCESSED ONLY ON THE CLASS IN WICH THEY ARE DECLARED, SO IF WE WANT TO ACCESS THE PARENT PROPERTIES nome AND cognome WE SHOULD SET THEM TO PROTECTED.
A PROTECTED PROPERTY CAN BE ACCESSED BY THE CLASS AND HER CHILD CLASSES BUT NOT EDITED WITHOUT USING A SETTER METHOD.
```ts
class Persona {

    constructor(protected readonly nome: string, protected cognome: string) { };

    // ...

};
```

WE DECLARE nome AND cognome AS SUPER PROPERTIES TO ACCESS THE PARENT CONSTRUCTOR
```ts
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

    // SETTER
    changeEnrCode(code: number) {
        this.matricola = code;
    };

};

let marco = new Studente('Marco', 'Verdi', 0o1234);
// Nome: Marco, Cognome: Verdi - Matr: 668
```

## ABSTRACT CLASSES
WE CAN DECLARE AN ABSTRACT CLASS TO USE AS TEMPLATE.
WE COULD USE Persona AS ABSTRACT CLASS AS IN OUR APP EVERY PERSON WILL HAVE A ROLE AND WE WILL NOT HAVE THE NEED TO GENERATE A Persona INSTANCE
```ts
abstract class Persona {

    constructor(protected readonly nome: string, protected cognome: string) { };

    // ...

};
```
THIS WAY WE CAN NOT CREATE A NEW Persona
```ts
// 👇 Cannot create an instance of an abstract class. 👇
const luca = new Persona("Luca", "Gialli"); // ❌

BUT WE CAN CREATE A NEW Studente (WICH EXTENDS Persona):
// ✔️
const marco = new Studente('Marco', 'Verdi', 0o1234);
```

WE CAN ALSO DECLARE ABSTRACT METHODS IN ABSTRACT CLASSES.
WHEN DECLARED AN ABSTRACT METHOD DOES NOT NEED LOGIC, BUT ONLY DECLARATION:
```ts
abstract class Persona {

    constructor(protected readonly nome: string, protected cognome: string) { };

    // ...

    abstract greet(): void;

};
```

BUT EACH CHILD CLASSES NEED THE LOGIC OF THE DECLARED METHOD, WICH CAN CHANGE FROM CLASS TO CLASS:
```ts
class Studente extends Persona {

    constructor(
        nome: string,
        cognome: string,
        private matricola: number
    ) {
        super(nome, cognome);
    };

    // ...

    // 👇
    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

};
```
IF AN ABSTRACT CLASS HAS AN ABSTRACT METHOD EACH CHILD **MUST** HAVE IT'S LOGIC.

## SINGLETON
SINGLETON ARE USED TO GET AN UNIQUE HARDCODED INSTANCE OF A CLASS.
```ts
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
```

## INTERFACES
INTERFACES ARE USED TO DEFINE THE ABSTRACTION OF BEHAVIOURS OF METHODS OR PROPERTIES A CLASS CAN IMPLEMENT, WITHOUT HAVING TO EXTEND ANOTHER CLASS.
EXAMPLE: A SMARTPHONE IS A DEVICE WICH HAS INTERNET CONNECTION, A TELPHONE IS A DEVICE WITHOUT INTERNET CONNECTION.
```ts
abstract class Device {

    constructor(protected nome: string, protected year: number) {};
    
    abstract turnOn(): void;
    abstract turnOff(): void;

    getYear() {
        console.log(`Questo ${this.nome} è stato prodotto nel ${this.year}`);
        
    }
};

interface internetConnection {
    ip: string;
    connect(): void;
    disconnect(): void;
};

class Smarphone extends Device implements internetConnection {

    ip: string;

    constructor(nome: string, year: number, ip: string) {
        super(nome, year);
        this.ip = ip;
    }

    connect(): void {
        console.log(`${this.nome} si è connesso all'indirizzo IP ${this.ip}`);
    }

    disconnect(): void {
        console.log(`${this.nome} si è disconnesso dall'indirizzo IP ${this.ip}`);
    }

    turnOn(): void {
        console.log(`${this.nome} si accende`);
    }

    turnOff(): void {
        console.log(`${this.nome} si spegne`);
    }

}

let iphone = new Smarphone('iPhone', 2019, '192.158.1.38');

// Questo iPhone è stato prodotto nel 2019
iphone.getYear();

// iPhone si accende
iphone.turnOn();

// iPhone si è connesso all'indirizzo IP 192.158.1.38
iphone.connect();

// iPhone si è disconnesso dall'indirizzo IP 192.158.1.38
iphone.disconnect();

// iPhone si spegne
iphone.turnOff();
```

AN INTERFACE CAN EXTEND ONE OR MORE INTERFACES:
```ts
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
    }

    connect(): void {
        console.log(`${this.nome} si è connesso all'indirizzo IP ${this.ip}`);
    }

    disconnect(): void {
        console.log(`${this.nome} si è disconnesso dall'indirizzo IP ${this.ip}`);
    }

    turnOn(): void {
        console.log(`${this.nome} si accende`);
    }

    turnOff(): void {
        console.log(`${this.nome} si spegne`);
    }

};

let macBook = new Computer('Macbook', 2017, '192.158.1.38', 'WiFi');

// WiFi
console.log(macBook.connectType);
```

## GENERICS
GENERICS ARE TYPES THAT CAN BE USED TO
-   DEFINE TYPES FOR FUNCTION PARAMETERS
-   DEFINE TYPES FOR FUNCTION RETURN

WE CAN DECLARE THE DESIRED TYPE OF VALUES
```
const arr: Array<string> = ['string1', 'string2'];
```

T IS A BUILT-IN TYPE THAT DEFINES A GENERIC TYPE
THIS WAY IT WILL GENERATE A GENERIC ARRAY OF THE SAME TYPE
```ts
function newArray<T>(items: T[]) {
    return new Array().concat(items);
};
```

THIS WAY IT WILL TAKE VIA INFERENCE NUMBER AS TYPE
```ts
// function newArray<number>(items: number[]): any[]
const arr1 = newArray([1,2,3]);
```

THIS WAY IT WILL TAKE VIA INFERENCE STRING AS TYPE
```ts
// function newArray<string>(items: string[]): any[]
const arr2 = newArray(['a','b','c']);
```

THIS WAY IT WILL TAKE VIA INFERENCE STRING OR NUMBER UNION AS TYPE
```ts
// function newArray<string | number>(items: (string | number)[]): any[]
const arr3 = newArray(['a','b',3]);
```

THIS WAY THIS WAY IT WILL ACCEPT ONLY NUMBERS AS PARAMETERS
```ts
const arr4 = newArray<number>([1,2,3]);
```

WE CAN ALSO DECLARE WE WILL PASS MULTIPLE TYPES AS UNION
```ts
const arr5 = newArray<number | string | boolean>([1,'a',true]);
```

WE CAN CONSTRAIN T TO BE A SPECIFIC TYPE
```ts
function newArray<T extends number>(items: T[]): T[] {
    return new Array().concat(items);
};
```
```ts
function newArray<T extends number | string>(items: T[]): T[] {
    return new Array().concat(items);
};
```
WE CAN DECLARE A CLASS THAT ACCEPT GENERIC VALUES THAT WILL BE TYPIZED BY INFERENCE
```ts
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

//👇 IT WILL ACCEPT ONLY NUMBERS AS ARGUMENTS NOW 👇
// (method) List<number>.addItem(item: number): void
list.addItem(1);

//👇 Argument of type 'string' is not assignable to parameter of type 'number'. 👇
list.addItem('a'); // ❌
```

TO SUMMARIZE, HERE ASSIGNS TYPE number TO T:
```ts
const list = new List<number>();
```

# DECORATORS
DECORATORS MUST BE ENABLED IN tsconfig.json
```json
/* Enable experimental support for legacy experimental decorators. */
"experimentalDecorators": true,
```

A DECORATOR FACTORY IS A FUNCTION THAT RETURN A DECORATOR.
WE DEFINE THE DESIDERED PARAMETERS IN OUR FUNCTION AND WE RETURN A DECORATOR THAT USES THE PARAMETERS AND THE CLASS PROPERTIES.
```ts
//👇 FUNCTION THAT RETURNS A DECORATOR FACTORY 👇
function createHtmlElement(template: string, id: string, text: string) {

    //👇 FUNCTION THAT RETURNS A DECORATOR 👇
    return function (constructor: any) {
    
        //👇 CREATES THE HTML ELEMENT 👇
        const container = document.getElementById(id);
        const element = document.createElement(template);

        //👇 CREATES THE CONTENT USING THE CLASS CONSTRUCTOR 👇
        const content = new constructor(text);

        if (container) {
            container.appendChild(element);
            element.textContent = content.text;
        }

    };

};

//👇 USES THE DECORATOR FACTORY 👇
@createHtmlElement('h1', 'container', 'DECORATORS TEST')
class DecoTextH1 {
    constructor(public text: string) { }
};

@createHtmlElement('p', 'container', 'DECORATORS TEST')
class DecoTextP {
    constructor(public text: string) { }
};
```

## PROPERTY DECORATOR
WE CAN USE DECORATOR WHEN WE ACCESS A CLASS PROPERTY:
```ts
function propertyDecorator(target: any, property: string) {
    console.log("Property decorator executed. Property is:", property, " Target Class is:", target);
}

function parameterDecorator(target: any, methodName: string, parameterIndex: number) {
    console.log(`Parameter decorator executed. Target: ${target}, Method: ${methodName}, Parameter Index: ${parameterIndex}`);
}

class MyClass {
    @propertyDecorator
    myProperty: string;

    constructor(public myProperty: string) {
        this.myProperty = myProperty;
    }
}

// OUTPUT:

// Property decorator executed. Property is: myProperty  Target Class is:
// {
// constructor: class MyClass
// length: 1
// name: "MyClass"
// ECC
// }
```

WE CAN APPLY DECORATOR TO METHODS PARAMETERS OF A CLASS:
```ts
function parameterDecorator(target: any, methodName: string, parameterIndex: number) {
    console.log(`Parameter decorator executed. Target: ${target}, Method: ${methodName}, Parameter Index: ${parameterIndex}`);
}

class MyClass {
    @propertyDecorator    
    myProperty: string;


    constructor(myProperty: string) {
        this.myProperty = myProperty;
    }

    // 
    getProperty(@parameterDecorator property: string) {
        property = this.myProperty;
        console.log(`Property: ${property}`);
    }
}
```

# IMPORT FILES

WE ADD TYPE MODULE ON THE SCRIPT TAG IN INDEX.HTML
```html
<script src="./dist/app.js" type="module"></script>
```

WE MAKE SURE THAT IN tsconfig.json, UNDER compilerOptions THAT "module" AND target USE THE RIGHT VERSION OF ES
```json
"target": "es2016",
"module": "ES6",
```

WE CREATE A SEPARATE FILE AND WE USE THE COMMAND export TO DECLARE THE DATA WE NEED
```ts
// utils.ts

export function logSuccess():void {
    console.log('successful import!');
};

export function logSum(a: number, b: number):void {
    console.log('Sum is ',a + b);
};

export function multiplication(a: number, b: number): number {
    return a * b;
};
```
WE IMPORT THE FUNCTIONS/DATA FROM THE FILE
```ts
// USE.js EXTENSION OR THE COMPILED FILE WILL NOT FIND THE FILE IMPORT
import { logSuccess, logSum, multiplication } from './utils.js';

logSuccess();

logSum(5, 2);

console.log(`Your operation result is ${multiplication(5, 2)}`);
```
