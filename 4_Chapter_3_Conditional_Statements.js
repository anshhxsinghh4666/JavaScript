// CONDITIONAL STATEMENTS :

// if Statements :
let age = 25;
if (age > 18) {
  console.log('You Can Vote');
}
if (age < 18) {
  console.log('You cannot Vote');
}

let mode = 'dark';
let color;
if (mode == 'dark') {
  color = 'black';
}
if (mode == 'light') {
  color = 'white';
}
console.log(color);

// if-else Statements :
let mode2 = 'dark';
let color2;
if (mode2 == 'dark') {
  color2 = 'black';
} else {
  color2 = 'white';
}
console.log(color2);

// else-if Statements :
let mode3 = 'dark';
let color3;
if (mode2 == 'dark') {
  color2 = 'black';
} else if (mode3 == 'blue') {
  color2 = 'blue';
} else if (mode3 == 'pink') {
  color2 = 'pink';
} else {
  color = 'white';
}
console.log(color3);

// For single line statement
if (mode === 'dark') console.log(mode);

/* 📘 SWITCH STATEMENT (JavaScript)

// 🔹 Definition:
// The switch statement is used to execute one block of code
// among multiple options based on a condition.
// It is an alternative to multiple if-else statements.

// 🔹 Syntax:
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;

  case value2:
    // code to execute if expression === value2
    break;

  default:
  // code to execute if no case matches
}
*/

// 🔹 Example:
let day = 2;

switch (day) {
  case 1:
    console.log('Monday');
    break;

  case 2:
    console.log('Tuesday');
    break;

  case 3:
    console.log('Wednesday');
    break;

  default:
    console.log('Invalid day');
}

// Output: Tuesday

// 🔥 Important Points:
// 1. expression is compared with each case value
// 2. break stops execution (VERY IMPORTANT)
// 3. If break is not used → fall-through happens
// 4. default works like "else"

// ⚠️ Fall-through Example:
let x = 1;

switch (x) {
  case 1:
    console.log('One');
  case 2:
    console.log('Two');
}

// Output:
// One
// Two  (because no break)
