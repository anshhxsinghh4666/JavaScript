// VARIABLES AND DATA TYPES :

// Variable -> A variable is a container used to store data values.
// JS is a Dynamically-Typed Language i.e we don't have to specify the data specifier of the variable like we don't have to write int , char etc.

/* Variable Rules : 
-> Variables are caase sensitive
-> Only letters , digits , underscore and $ is allowed (Not even space)
-> Only a letter , underscore(_) or $ should be 1st character.
-> Reserved words can't be variable names.
-> We used Camel Case : fullName
*/

fullName = 'Tony Stark';
age = 24;
price = 99.99;
x = null;
y = undefined;
console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);

// Boolean :
isfollow = true;
console.log(isfollow);

/* KeyWords : 
-> var : Variables can be re-declared & updates. A global scope variable.
-> let : Variable cannot be re-declared but can be updated. A block scope variable.
-> const : Variable cannot be re-declared or updated. A block scope variable.

Note : Since var can be re-declared then whenever we re-delare it like 
var age = 10;
var age = 90;
and so on...
Each time a new age variable is created and when we extract value of age it give the value of the last age value , so this takes a lot of space
and not a good Practice.
So we use 'let'. It declares the variable only once and then updates the value.

Note : var is a global keyword that is it's value exists even outside the block of code {} BUT
let and const are block scope keyword i.e. outside the block of code {} there value don't exists. 

Note : let variables can't be re-declared BUT they can be re-declared if they are in different block of code

*/

let name = 'Tony Stark';
let a; // Undefined
const age_ = 24; // Const declaration must be initilialized i.e we have to provide a value at time of declaration
const PI = 3.14;
var totalPrice = 1000;

console.log(name);
console.log(a); // Undefined
console.log(age_);
console.log(PI);
console.log(totalPrice);

// NOTE : As a good programmer don't use 'var', use 'let' instead

// Note : let variables can't be re-declared BUT they can be re-declared if they are in different block of code
{
  let a = 5;
  console.log(a);
}
{
  let a = 10;
  console.log(a);
}

// Data Types :

// Primitve -> There are 7 primitive Data Types.
// Number , string , Boolean , undefined , NULL , BigInt , Symbol

// Number :
let age2 = 24;
console.log(typeof age2);
let price2 = 100.5;
console.log(typeof price2);

// String :
let fullName2 = 'Tony Stark';
console.log(typeof fullName2);

// Boolean :
isfollow2 = false;
console.log(typeof isfollow2);

// Undefined :
let c;

// NULL :
let d = null;
console.log(typeof d); // This will show 'Object'

// BigInt :
let q = BigInt('123');
console.log(typeof q);

// Symbol :
let s = Symbol('Hello!');
console.log(typeof s);

// Non-Primitive : Objects -> Collection of Values (Arrays , Functions)
// We store {key : value} paires
// We declare Objects using 'const' generally

const student = {
  fullName3: 'Ansh Kumar Singh', // fullname3 -> key , "Ansh" -> Value
  age: 20,
  cgpa: 8.62,
  isPass: true,
};
console.log(typeof student);
console.log(student);
student['fullname3'];

console.log(student['age']);
// OR
console.log(student.age); // We we use student.age then don't add " "
console.log(student.cgpa);

student.age = student.age + 1; // Update Value of age
console.log(student.age);
student.name = 'Ankit'; // Update Name
console.log(student.name);

/* Note : let   -> Can Update 
          const -> Can't Update
          const object : key -> Can Update 
*/

/* NOTE : 
    Int additon : 
    12 + 1 = 13

    String addition : 
    "123" + 1 = "1231"
*/
