// Four Forms Of Function Declaration normally (i.e., not inside classes, objects).

// 1. FUNCTION DECLARATION
function a(){              
    return 1;
}
console.log(a());
/* Interval */


// 2. FUNCTION EXPRESSION (Function has no name of its own)
let b = function(){
    console.log("Called b");
    return 2;
}
console.log(b());
/* Interval */


// 3. ARROW FUNCTION
let c = () => {
    console.log("Called c");
    return 3;
}
console.log(c());
/* Interval */


// 4. NAMED FUNCTION EXPRESSION
let d = function e(){
    console.log("called function e in the name of d");
    //e();     e() can be called ONLY inside the function itself and not outside.
    return 4;
}
console.log(d());

// console.log(e()); ❌ Wrong because the name `e` exists only inside the function's own scope.
// The outer scope only knows the variable `d` that stores the function reference.
// Therefore the function can be called using `d()`, but `e()` cannot be accessed outside.