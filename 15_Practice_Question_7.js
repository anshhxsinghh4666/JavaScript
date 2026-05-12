/* Create a function using the “function” keyword that takes a String as an argument 
& returns the number of vowels in the string.

Create an arrow function to perform the same task.
*/

let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

let str = prompt("Enter a String");

function strvow(msg) {
  let num = 0;
  for (let i = 0; i < msg.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (msg[i] == vowels[j]) {
        num++;
      }
    }
  }
  return num;
}

let vow = (msg) => {
  let num = 0;
  for (let i = 0; i < msg.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (msg[i] == vowels[j]) {
        num++;
      }
    }
  }
  return num;
}

document.write("Number of Vowels : ", strvow(str));
document.write("<br>");
document.write("Number of Vowels : ", vow(str));