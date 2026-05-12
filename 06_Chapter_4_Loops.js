// LOOPS : Loops are used to execute a piece of code again and again

// For Loop :

// Print 5 times :
for (let i = 0; i <= 5; i++) {
  console.log('Hello World');
}

// Calculate sum of 1 to 5 :
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

// Print 1 to 5 :
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// console.log(i) -> This won't print i as it is declared using let so it'll stay inside the block.
// If we used var for i then it'll print , BUT we don't do that

// Infinite Loop : A loop that never ends

// While Loop :

// Print 1 to 5 :
let i = 1;
while (i <= 5) {
  console.log('i = ', i);
  i++;
}

// Do-while Loop :

// Print 1 to 5 :
let j = 1;
do {
  console.log('i = ', i);
  i++;
} while (j <= 5);

// For-of Loop : Used for Strings and Arrays
// NOTE : Don't use this for Objects.
/* Syntax : for(let val of strVar){
                Do some work;
            }
*/

let str = 'Ansh';
for (let val of str) {
  // Characters will be stored in the iterator(k)
  console.log('Val = ', val);
}

// Calculate Size of String :
let size = 0;
for (let val of str) {
  console.log('Val = ', val);
  size++;
}
console.log('String Size = ', size);

// For-in Loop : Used for Objects.
/* Syntax : for(let key in objVar){
                Do some work;
            }
*/

let student = {
  name: 'Ansh Kumar Singh',
  age: 20,
  cgpa: 9.24,
  isPass: true,
};
for (let key in student) {
  console.log('Key = ', key);
}
for (let key in student) {
  console.log('Key = ', key, 'Value = ', student.key);
}
