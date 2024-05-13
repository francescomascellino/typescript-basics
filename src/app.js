"use strict";
// OBJECTS
let tsObject2;
tsObject2 = {
    name: "Mario",
    age: 30,
    isMarried: false,
    address: { city: 'Roma', number: 30, street: 'Via Milano' }
};
let tsObject3;
tsObject3 = {
    name: "Mario",
    age: 30,
    isMarried: false
};
// TUPLES
let tuple;
tuple = [2, 7];
// UNIONS
let unionTs2 = 'a string';
let user;
user = {
    name: 'Mario',
    age: 30,
    isMarried: false,
    address: { city: 'Roma', number: 30, street: 'Via Milano' }
};
let customTest = 'true';
// ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
;
let enumUser = {
    name: 'Mario',
    age: 30,
    role: Role.ADMIN
};
let testUser1 = {
    name: 'Mario',
    age: 30,
    isMarried: false,
    address: { city: 'Roma', number: 30, street: 'Via Milano'
    },
    role: Role.ADMIN
};
// FUNCTIONS
function somma(a, b) {
    return a + b;
}
;
console.log(somma(3, 5));
// WE CAN DECLARE THE EXPECTED TYPE ON A FUNCTION PARAMETER
function getPerson(user) {
    // WE CAN ACCESS THE PROPERTIES OF THE PARAMETERS
    console.log(`USER ID: ${user.name}`);
}
// IF WE ASSIGN A DEFAULT VALUE TO A PARAMETER, TS INFERENCE WILL ASSIGN THE TYPE OF THAT VALUE TO THE PARAMETER. (parameter) b: number
function somma2(a, b = 3) {
    return a + b;
}
;
// OPTIONAL PARAMETERS
function tenCheck(a, b = 3) {
    if ((a + b) > 10) {
        return 'sum is > 10';
    }
    else {
        return 'sum is < 10';
    }
}
;
// VOID FUNCTION
function somma3(a, b = 3) {
    console.log(a + b);
}
;
let sommaVar = somma3;
let sommaVar2;
sommaVar2 = somma2;
//# sourceMappingURL=app.js.map