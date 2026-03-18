class Person{
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.raj = ()=>{       //DECLARING IT LIKE THIS WOULD BE FINE. Declaring it like this creates a Copy of the Function in the Memory as each of the Instances' Propety
        let sum = 5+6;
        return sum;
        }

        function jar(){        //Whenever Constructor is called, everything inside it runs.
            console.log("Jar");
        }
        jar();
        
    /*  jar(){                  DO NOT DECLARE without "function" keyword.
            let sum = 5+6;
            console.log(sum);
        }
    */
    };
    raj(){                      //Declare without using "function" keyword, because JS does it internally.
        let sum = 5+6;          //As this function is declared outside the constructor SO this will be Kept inside the "Person.protoype"
        return sum;
    }
};


let Raj = new Person("Raj",23,'M');

console.log(Person.prototype.raj());        //Person.prototype gives access to the shared functions.
console.log("Person.prototype === Raj.__proto__:", Person.prototype === Raj.__proto__);
console.log(Raj.raj());                     //OR Raj.__proto__.raj() . We can ommit writing "__proto__". JS searches __proto__ automatically internally.