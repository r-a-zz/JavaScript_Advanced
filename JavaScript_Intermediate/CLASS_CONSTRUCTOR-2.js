class Person {

    //Constructor BODY
    constructor() {
        this.name = "Raj";
        this.age = 23;
        this.weight = 70;
        this.z;
    }
    //---Class BODY----

    //  Person.prototype.jar=()=>{}     ❌Wrong way to declare , NOT VALID UNDER THE GRAMMER RULES.
    //  function jar(){}                ❌Wrong way to declare , NOT VALID UNDER THE GRAMMER RULES.
    //  let a = function jar(){}        ❌Wrong way to declare , NOT VALID UNDER THE GRAMMER RULES.

    jar() {}                            //Only way to declare functions inside Person.prototype using the CLASS BODY.
    a = 5;                              //This simply Becomes the Instance Property and not the Person.prototype Property.
    raj = () => {};                     //Because value is being assigned here,So, Again an instance property created like above.
}

let Raj = new Person();

Person.prototype.b = 5; //Declaring a=5 inside Person.prototype
console.log(typeof Person.prototype); //OBJECT
console.log(Person.prototype);