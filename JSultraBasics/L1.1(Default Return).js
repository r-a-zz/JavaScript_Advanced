const a = (x,y)=>{           //a basic Callback function.
    console.log("I am HelloWorld");
    let sum = x+y;
    //return undefined;     <-- By default it returns "undefined" unless specified
}

prompt(`Enter the value of x :${x}\n Enter the value of y :${y}`);

let returnValue = a(x,y);
console("So, the value of returnValue is: ", returnValue);  // this prints "undefined".

