function outer(){
    let count = 0;

    return function inner(){    //This Returns the "function inner" , Remeber it passes CLosure , keeping the count = 0 as "inner fucntion" isn't called.
        count++;
        console.log(count);
    }
}
let a = outer();
console.log(a());