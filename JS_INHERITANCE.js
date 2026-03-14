let p1 = {              //A BASIC OBJECT Literal IN JAVASCRIPT.
    fname: "Raj",
    lname: "Singh"
    //__proto__  <- Hidden Reference , Generally contains Shared Methods and Functions.  
}

console.log(p1);            
console.log(p1.__proto__);  // p1.__proto__  is NULL.


let p2 = Object.create(p1); // This does not assign properties of p1 into p2. Just the p2.__proto__ -> p1. 
console.log(p2.__proto__); // the WHOLE p2.__proto__ points to the p1 OBJECT.


p2.__proto__.fname="Jar" //We changed it the p2.__proto__ which was referancing the p1.  
console.log(p1);


let p3 = new String("RAJ");   //p3 is an Object containing string, not a string.
let p4 = "RAJ";     //Normal String.
console.log(  p3,",",typeof p3   ,"\n",    p4,",",typeof p4  );  

