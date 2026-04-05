class Person{

    //class properties are  being declared.
    name:string;                    
    age:number;
    
    constructor(name:string , age:number){
        this.name = name;
        this.age= age;
        let a = 97;        //not added as instance property.
    }
}
let Raj = new Person("Raj" , 23);
console.log(Raj);