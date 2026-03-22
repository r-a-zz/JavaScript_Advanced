class Person{

    // A constructor body follows a similar Rules as any normal function in JS does.
    // Whenever a new Instance is created , CONSTRUCTOR BODY is called. THINK of it like CONSTRUCTOR FUNCTION IS BEING CALLED.
    // ONLY Constructor BODY behaves like a normal function body and the rest Class Body has different Grammer rules.

    constructor(name,age,sex){  //----Constructor BODY Starts From Here.-----// 

        this.name = name;
        this.age = age;
        this.sex = sex;
        this.raj = ()=>{   
            let sum = 5+6;
            return sum;
        }

        //Runs noramlly as a Stand-Alone nested function as its been defined like that.
        function jar(){        
            console.log("Jar");
        }
        jar();
    }
    //-----Class Body Starts from here.-----//

    // This Special area is called Class Body, ONLY made for declaring functions that are to be kept inside the "Person.prototype". 
    // This is the only way to declare functions inside the prototype when we are using CLASS SYNTAX.
    // Either we can declare it like this or we can declare it like the way we do in Constructor Function (by writing "Person.prototype.raj=()=>{}" outside the class body).
    // Both are valid ways to declare functions inside the prototype.
    jar(){                      //Declare without using "function" keyword as here we cannot define any function like normally we do.
        let sum = 5+6;      
        return sum;
    }
};


let Raj = new Person("Raj",23,'M');

console.log(Raj);
console.log(typeof Person.prototype);
console.log(Person.prototype.jar());   //Person.prototype gives contains shared methods or shared variables.
console.log("Person.prototype === Raj.__proto__:", Person.prototype === Raj.__proto__);
console.log(Raj.raj());         //OR Raj.__proto__.raj() . We can ommit writing "__proto__". JS searches __proto__ automatically internally.