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
tsObject2 = 'mario';

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
    age: 'trenta', 
    isMarried: false
};

// WE CAN NOT ADD UNDECLARED PROPERTIES
tsObject3 = {
    name: "Mario",
    age: 30,
    isMarried: false,
    //👇 Object literal may only specify known properties, and 'address' does not exist in type '{ name: string; age: number; isMarried: boolean; }'. 👇
    address: {city: 'Roma', number: 30, street: 'Via Milano'}
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
tuple = ['carl', 2];

//👇 Type '[number, number, number]' is not assignable to type '[number, number]'. Source has 3 element(s) but target allows only 2. 👇
tuple = [1, 2, 3];

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
let unionTs: string | number = 'a string';

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
let customTest: Test = true;

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
    return a + b
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
let sommaVar: (a: number, b, number) => number;
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
    }

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    }

    changeSurname() {

    }

};

let mario: Persona

mario = new Persona("Mario", "Rossi");

const luca = new Persona("Luca", "Gialli");

console.log('full name:', luca.getFullName());
// full name: Luca Gialli

mario.greet();
// Ciao, sono Mario Rossi

console.log(
    luca.welcome(mario)
);
// Benvenuto Mario Rossi!
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
    }

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
    }

};
```

(WE CAN ADD SOME ERROR MANAGEMENT INSIDE THE MUSTACHE BRACKETS CONTRUCTOR)
```ts
class Persona {

    constructor(private nome: string, private cognome: string) {
        if (!nome || !cognome) {
            throw new Error("Nome e cognome devono essere forniti.");
        }
    }

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    }

};
```

## STATIC PROPERTIES
```ts
class Persona {

    static nazione: string = "Italia";

    constructor(private nome: string, private cognome: string) {
    };

    getFullName(): string {
        return `${this.nome} ${this.cognome}`
    };

    greet(): void {
        console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
    };

    welcome(persona: Persona): string {
        return `Benvenuto ${persona.nome} ${persona.cognome}!`
    }

    static getNazione(): string {
        return Persona.nazione;
    }

};
```
