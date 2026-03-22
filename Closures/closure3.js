function a(){

    b();           // ❌Hoisting is not possible where because 👇
    return function b(){     //"function b" declared below is not a STANDALONE FUNCTION , but a NAMED FUNCTION EXPRESSION(because of "return" and "b"). Which holds an "UNDEFINED VALUE" in the variable environment at the Funntion's context BOX.
        let count =0;
        console.log(count);
    }
}
let c= a();
c();