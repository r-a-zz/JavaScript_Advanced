class A{
    //---Contructor Body---//
    constructor(){
        this.name="Raj";
        this.age=23;
        console.log(this);         //#1     this === C
    }

    //---Class Body---//
    B(){
        console.log(this.name);
    }
}
let C = new A();
console.log(A.prototype.B);        //#2     Loggs the function object.

//Note How 'b()' is being called, and "this" changes as per How function is called.
console.log(A.prototype.B());      //#3     this === A.prototype, i.e., undefined in this Case.
console.log(C.B());                //#4     this === C
console.log(this.name);            //#5     this === undefined, coz this is bound to the Window Execution Context(GLobal Execution Context) here.