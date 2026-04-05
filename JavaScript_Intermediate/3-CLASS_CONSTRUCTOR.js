class Person{

    //---NO CONSTRUCTOR BODY DEFINED HERE---//

    //---DIRECTLY Written Under Class Body---//
    //---Below Becomes the Instance Property because "assignment" is interpreted as Instance property to.---/
    name = "Raj";
    age = 23;
    weight = 70;
    c = ()=>{console.log("Instance Method 1");}
    d = function(){console.log("Instance Method 2");}
    e = function f(){console.log("Instance Method 3");}

    //Below Becomes The Prototype Method.
    a(){console.log("Protoype Method 1");}
    b(){console.log("Protoype Method 2");}
   
}
let Raj = new Person();