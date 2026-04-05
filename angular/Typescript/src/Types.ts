//---TYPESCRIPT INFERRS THE TYPE OF THE VARIABLE DURING THE DECLARATION/INITIALISATION.---//


//---Explicit type casting---//
//using "name" as variable here gives conflict with the name in the window object , i.e., window.name 
let appName:string = "HelloWorld";     //string declaration in TS.
let age:number = 23;                   //Number declaration in TS.
let isPlaced:boolean = false;          //Boolean declaration in TS.


//---Implicit Type Casting(Type Inference)---//
let x = 0;                             //TypeScript Inferrs this as "number" type, this behaviour is called implicit typing.


let y ;                                //TypeScript Inferrs the Type of the Implicit Initialization to be "any".
y = 2 ;                                //"Any" type can be reinitialized to any type value.
y = "Hello World";


let z = null;                          //unless Strict mode enabled , TS inferrs this under type "any". 

//---OBJECTS--//
let obj1={
    userName :"Raj",
    age:23,
    weight:56
};

//---INTERFACE---//                     // This is a TypeScript interface. Interfaces are used to describe the shape of an object—i.e., what properties an object must have and their types.
interface User{                         //A new TYPE named "user" is created. This acts as a shape giver to any object using it.
    userName:string,                    //Objects can use this user defined type to shape itself.
    age:number                          //Kind of Blueprint for OBJECT LITERALS.
};
let obj2:User = {
    userName:"RAJ",
    age:23
};