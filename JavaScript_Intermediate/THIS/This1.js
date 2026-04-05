//---"THIS" always depends upon how the FUNCTION is called , AND NOT where the function is!!---//

class A{
    constructor(){
        console.log("This #1:",this);    //Before Property being assigned.

        this.name="Raj";
        this.age=23;

        console.log("This #2",this);      //After Property been assigned.
    }
}
let B = new A();     