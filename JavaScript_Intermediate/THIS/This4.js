function A(){
    this.name="Raj";
    console.log(this.name);
    console.log((5).toLocaleString);
}
let x=5;

//Explicit Binding of object(here x) to a function.
A.call(x);    // Remember , this binding starts from teh time when the function is called.
