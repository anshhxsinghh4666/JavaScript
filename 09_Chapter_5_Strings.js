// Strings : String is a sequence of characters used to represent text
//           Strings are Immutable in JS
// Creating String :
let str = 'Ansh';

// String Length :
console.log(str.length);

// String Indices :
console.log(str[0]);
console.log(str[2]);


// Template Literals : A way to have embedded expressions in strings i.e We can write strings with variable together

let specialString = `This is template literal`;  // We used ` ` -> Backticks , in place of quotes
console.log(specialString);
let obj = {
    item: 'Pen',
    price: 10,
};
console.log('The cost of', obj.item, 'is', obj.price, 'rupees');

// BUT using template literals :
let output = `The cost of ${obj.item} is ${obj.price} rupees`;  // Use ${Variable} for variable
console.log(output);
//Strings Interpolation : To create strings by doing substitution of placeholders
//          Syntax : `string text ${expression} string text`

let a = `Template Literal ${1 + 2 + 3}`;  // We can also add expressions
console.log(a);

// Escape Character :
console.log('Apna \n College');  // '\n' -> next line character
console.log('Apna \t College');  // '\t' -> tab space

// NOTE : Length of escape character is considered as 1
let str2 = 'Apna\tCollege';  // Original Length = 11
console.log(str2.length);  // Printed Length = 12 (+1 due to escape character \t)


// String Methods : They are built in functions to manipulate a string
// NOTE : These methods donot change the original string. They make a new string and print the string.

// str.toUpperCase() -> Converts whole string to upper case
let str3 = 'Ansh Kumar Singh';
console.log(str3.toUpperCase());
console.log(str);  // This will print the original string as methods don't change the original string
let str4 = console.log(str3.toUpperCase());  // We can store this new string in a new variable. If we store this again in the original string i.e str3 then the original value will be updated.

// str.toLowerCase() -> Similar to Upper Case

// str.trim() -> Removes whitespaces from starting and end
let str5 = '    Apna college    JS.  ';
console.log(str.trim());


// slice(start, end) -> Returns part of string (end index not included)
// Note : The end value donot include
let str6 = 'JavaScript';
let result1 = str6.slice(0, 4);
let result2 = str6.slice(2);
console.log(result1);  // Java

// concat() -> Joins two strings
let str7 = 'Hello';
let str8 = 'World';
let result3 = str7.concat(' ', str8);
let _result3 = str7 + str8;
console.log(result3);  // Hello World
console.log(_result3);  // Hello World

// replace(searchValue, newValue) -> Replaces first occurrence of a value
let text = 'I love Java';
let result4 = text.replace('Java', 'JavaScript');
console.log(result4);  // I love JavaScript
// To change Original string :
text = text.replace('I', 'Ansh');
console.log(text);

// charAt(index) -> Returns character at given index
let name = 'Ansh';
let result5 = name.charAt(2);
console.log(result5);  // s
