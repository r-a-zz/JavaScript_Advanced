"use strict";
//---TYPESCRIPT INFERRS THE TYPE OF THE VARIABLE DURING THE DECLARATION/INITIALISATION.---//
Object.defineProperty(exports, "__esModule", { value: true });
//---Explicit type casting---//
//using "name" as variable here gives conflict with the name in the window object , i.e., window.name 
let appName = "HelloWorld"; //string declaration in TS.
let age = 23; //Number declaration in TS.
let isPlaced = false; //Boolean declaration in TS.
//---Implicit Type Casting(Type Inference)---//
let x = 0; //TypeScript Inferrs this as "number" type, this behaviour is called implicit typing.
let y; //TypeScript Inferrs the Type of the Implicit Initialization to be "any".
y = 2; //"Any" type can be reinitialized to any type value.
y = "Hello World";
let z = null; //unless Strict mode enabled , TS inferrs this under type "any". 
//---OBJECTS--//
let obj1 = {
    userName: "Raj",
    age: 23,
    weight: 56
};
;
let obj2 = {
    userName: "RAJ",
    age: 23
};
//# sourceMappingURL=Types.js.map