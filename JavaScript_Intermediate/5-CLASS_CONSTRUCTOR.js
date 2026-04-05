class Person {

    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;

        // This object is created separately for each instance
        // (i.e., NOT shared between objects)
        this.obj = {
            FavColour: 'Green',
            FavPet: 'Dog',
            FavSinger: 'Kishore Kumar'
        };
    }

    // These methods are NOT stored inside each object
    // They are stored on Person.prototype and shared via reference
    a() {
        let Xa = 3;
        let Ya = 4;
        let sum = Xa + Ya;
        console.log("the sum is ", sum);
    }

    b() {
        let Xb = 3;
        let Yb = 4;
        let sum = Xb + Yb;
        console.log("the sum is ", sum);
    }
}


// Class declarations are hoisted but remain UNINITIALIZED
// during the memory creation phase (Temporal Dead Zone).
// The prototype becomes fully available only during execution phase.

// This line executes AFTER the class is initialized.
// It overwrites ONLY the 'b' method on the prototype,
// NOT the 'a' method.
Person.prototype.b = 6;


// This adds a new property 'c' on the prototype.
// This object is SHARED across all instances (single reference), NO QUESTION OF DEEP OR SHALLOW COPY.
Person.prototype.c = {
    Book: "Sherlock Holmes",
    Author: "Arthur Conan Doyle",
    Published: 1879
};


// Creating instances
let A = new Person("Raj", 23, 70);
console.log(
    "INSTANCE:", A,
    ",", "A.__proto__ :", A.__proto__
);

let B = new Person("Tanu", 26, 62);
console.log(
    "INSTANCE:", B,
    ",", "B.__proto__ :", B.__proto__
);


// Important observations you can test:

// Methods are shared (same reference)
console.log(A.a === B.a);   // true

// 'b' is now a number, not a function
console.log(A.b);           // 6

// Prototype object 'c' is shared
console.log(A.c === B.c);   // true

// Modifying shared object affects all instances
A.c.Book = "Changed Book";
console.log(B.c.Book);      // "Changed Book"

// Instance-level object is NOT shared
console.log(A.obj === B.obj); // false