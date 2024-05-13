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
- Type Aliases
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
    USER, // THIS WILL BE (enum member) Role.USER = 11)
    GUEST = 'guest' // (enum member) Role.GUEST = "guest"
};
```
# COMPILE TS FILE WITH TYPESCRIPT COMPILER
```bash
tsc app.ts
```
This will create the app.js file:
```js
// app.js
function somma(a, b) {
    return a + b;
}
;
console.log(somma(3, 5));
```
