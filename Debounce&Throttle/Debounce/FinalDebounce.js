// Step 1: Debounce utility function.
function debounce(fn, delay){
    // Returns a new function with its own private timerId (closure).
    let timerId;

    return function (...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args);
        }, delay);
    };
}
// Step 2: Define the target function to debounce.
let debounce_target = (...args)=>{
    console.log(...args, " was implemented after using debounce logic");
};

// Step 3: Create and use the debounced version of the target function.
let Any_Debounce_Using_function = debounce(debounce_target, 2000);

Any_Debounce_Using_function("H");
Any_Debounce_Using_function("He");
Any_Debounce_Using_function("Hel");
Any_Debounce_Using_function("Hell");
Any_Debounce_Using_function("Hello");