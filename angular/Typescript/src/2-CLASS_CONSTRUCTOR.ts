class Person{

    name:string;
    age=21;                                 //Not just age:number; but doing AS IT'S DONE NOW too Locks the TYPE inferred.

    constructor(name:string, age:number){
        this.name= name;                    //this.name:string = name;    ❌
        this.age=age;
    }
    sum():number{
        let a = 2;
        let b = 3;
        return a+b;
    }
}
let Raj = new Person("Raj",23);
