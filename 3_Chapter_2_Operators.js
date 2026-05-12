// OPERATORS :

// Arithmetic Operators : +, -, *, /, %, Urinary Operator(++, --)

let a = 5;
let b = 2;

console.log('a = ', a, 'b = ', b);
console.log('a+b = ', a + b); // Addition
console.log('a-b = ', a - b); // Substraction
console.log('a*b = ', a * b); // Multiplication
console.log('a/b = ', a / b); // Divide
console.log('a%b = ', a % b); // Modulus : Gives the Remainder
console.log('a^a = ', a ** a); // Exponential : 2^2 = 4

// Urinary Operators :
let c = 8;
let d = 11;

// Post-Increment/Decrement :
console.log('c = ', c, 'd = ', d);
c++; // c=9
console.log('c = ', c);
d--; // d=10
console.log('d = ', d);

// Pre-Increment/Decrement :
console.log('c = ', c, 'd = ', d);
++c;
console.log('c = ', c);
--d;
console.log('d = ', d);

// Assignment Operator : =, +=, *=, %=, **=

let e = 4;
let f = 7;

e += 4; // e = e+4
f -= 4; // f = f-4
e *= 2; // e = e*2
f %= 2; // f = f%2
e **= 2; // e = e**2

// Comparison Operators : ==, ===, !=, !==, >, >=, <, <=
let g = 15;
let h = 20;
let i = '20';

console.log('g = f', g == f); // False  (Equal to)
console.log('g != f', g != f); // True  (Not Equal to)

console.log('h = i', h == i); // True
//Since i is a string still It returns true because JS first convert the string to Int and then compare it (string -> Number Convertion -> Compare)

console.log('g = f', g === f); // False  (Equal to & type -> Strict version of Equal to)
console.log('g != f', g !== f); // True  (Not Equal to & type -> Strict version of Not Equal to)

console.log('h = i', h === i); // False (Equal to & type)
// This returned false because we used Equal to & type which is the stricter version of Equal to. This donot compare number and string by converting string->number

console.log('g > h', g > h); // False
console.log('g >= h', g >= h); // False
console.log('g < h', g < h); // True
console.log('g <= h', g <= h); // True

// Logical Operator : &&, ||, !
let j = 6;
let k = 5;

let cond1 = j > k; // True
let cond2 = j === k; // True
console.log('cond1 && cond2 = ', cond1 && cond2); // false (Logical And)
console.log('cond1 || cond2 = ', cond1 || cond2); // True  (Logical OR)
console.log('cond1 || cond2 = ', !(cond1 || cond2)); // False  (Logical NOT)

// Ternary Operator : condition ? true output : false output
// -> Compact if-else
// -> NOT Preferable Method
let age = 25;
let result = age >= 18 ? 'Adult' : 'Not Adult';
console.log(result);
// OR
age >= 18 ? console.log('Adult') : console.log('Not Adult');
