class Person {

    //Constructor BODY
    constructor() {
        this.name = "Raj";
        this.age = 23;
        this.weight = 70;
        this.z;                         //this.z only checks the presence of z inside the object created by new. This doesn't Create new property 'z' inside the object.
    }

    //---Class BODY---//

    //Becomes The Instance Property, beause all these ain't method definition , BUT pure value assignment.
    a = "Raj";
    b = 23;
    c=()=>{}
    d=function(){}
    e=function f(){}

    //Becomes The Prototype Property of the class OR __proto__ (INHERITED PROPERTY) of the instance created
    g(){console.log("Protoype Method 1");}
    h(){console.log("Protoype Method 2");}

    //  Person.prototype.jar = ()=>{}     ❌Wrong way to declare , NOT VALID UNDER THE GRAMMER RULES.
    //  function jar(){}                  ❌STAND-ALONE FUNCTION, INVALID GRAMMER RULES.
    //  let a = function jar(){}          ❌"let" Keyword isn't allowed, NOT VALID UNDER THE GRAMMER RULES.

}

let Raj = new Person();

Person.prototype.b = 5; //Declaring b=5 inside Person.prototype
console.log(typeof Person.prototype); //OBJECT
console.log(Person.prototype);