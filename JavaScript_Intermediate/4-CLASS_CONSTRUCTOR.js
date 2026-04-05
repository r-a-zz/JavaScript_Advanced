class Person{

    //Class Body
    Bheight = 173;                          //We wrote this before the constructor and still we see that the Bheight is taken as Instance Property.

    //Constructor Body
    constructor(name, age , weight){
        this.name=name;
        this.age= age;
        this.weight= weight;
    }
    //Class Body
    Aheight= 176;
    a(){
        console.log("This is prototype method 1");
    }
}
let Raj = new Person("Raj",23, 70);
console.log(Raj);