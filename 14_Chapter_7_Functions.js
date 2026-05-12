// FUNCTIONS : Block of code that performs a specific task , can be invoked whenever needed
//             Reduces Redundancy


function myFunction() {  // Function Declaration without Parameter
    console.log('Welcome to Apna College');
    console.log('Learning JS');
}
myFunction();  // Funhction Call

function message(msg) {  // Function Declaration with Parameter
    console.log(msg);
}
message('Hello');  // Function Call

function sum(x, y) {
    s = x + y;
    return s;
}
let val = sum(3 + 8);
console.log(val);


/* Arrow Functions : Compact way of writing a function. 
                     Preferable Method for small functions
            Syntax : const functionName = (param1, param2,....)=>{
                        Do Some Work
                    } 
*/

const mul = (a, b) => {
    return a * b;
};
mulResult = mul(11, 8);
console.log(mulResult);

console.log(sum);  // Defines the function



// CallBack : It is a function to execute for each element in the Array
//            A CallBack is a function passed as an argument to another function.
function abc() {
    console.log('Hello');
}
function myFunc(abc) {  // abc is CallBack function
    return abc;
}

/* ARRAY METHOD : 

// forEach Loop in Arrays : Function will be called for each element of the array
                            They are higher order function/Method. 
        Higher Order Function/ Methods that either take another function as a parameter inside them 
        or they return another function as there output
        Syntax : arr.forEach(callBackFunction)
*/
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {  // value at each index
    console.log(val);
});

// forEach Loop in Arrays as Arrow Function :
let arr_ = ['Pune', 'Delhi', 'Mumbai'];
arr.forEach((val) => {
    console.log(val.toUpperCase());
})