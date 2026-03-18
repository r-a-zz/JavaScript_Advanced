const a = (x,y)=>{           //a basic Callback function.
    console.log("I am HelloWorld");
    let sum = x+y;
    //return undefined;     <-- By default it returns "undefined" unless specified
}

prompt(`Enter the value of x :${x}\n Enter the value of y :${y}`);

a(x,y); // undefined is returned here. Amd thus the Program Control Flows the next line.

console("Hello World ");  // this line is executed because a(x,y) is get returned as undefined, so program flowed to the mext line.