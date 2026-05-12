// ARRAYS : Collections of items .
//          Linear way of storing data.
//.         Mutable in nature


let marks = [90, 91, 88, 98, 94];
console.log(marks);
console.log(typeof marks);  // Type of array is object

console.log(marks.length);  // Length of Array

let name = ['Ansh', 'Ankit', 'Darsh', 'Pavitra'];


// Looping Over an Array :
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

for (let el of name) {
    console.log(el);
}


// Questions : Find Avg Marks of Class


// Array Methods :

// push() : Add to end (Add in original array)
let food = ['Potato', 'Tomato', 'Apple']
food.push('Banana');
food.push('Peach', 'Lichi');
console.log(food);

// pop() : Delete from end and return (Delete in original Array)
food.pop();
console.log(food);
let deletedFood = food.pop();
console.log(food);

// toString() : converts array to string
let snacks = ['Chips', 'Biscuits', 'Maggie', 'WaiWai'];
console.log(food.toString());

// concat() : join multiple arrays and return result (Don't change original array)
let marvel = ['IronMan', 'thor', 'IronMan'];
let dc_heroes = ['Volwarine', 'DeadPool'];
let indianHeroes = ['Kriish', 'ShaktiMan'];

let heroes = marvel.concat(dc_heroes);
console.log(heroes);
let heroes_ = marvel.concat(dc_heroes, indianHeroes);
console.log(heroes_);

// unshift() : add to start
marvel.unshift('AntMan');

// shift() : Delete from Starting
let val = marvel.shift();
console.log('Deleted Value : ', val);
console.log(marvel);

// slice() : returns a piece of the array (Doesn't change in original array)
//      Syntax : slice(startIdx, endIdx)
// NOTE : Last index is not included
let characters = ['Max', 'Caroline', 'Oleg', 'Han'];
console.log(characters.slice(1.2));
console.log(characters.slice(1));

// splice() : change original array (add, remove, replace)
//      Syntax : splice(startIdx, delCound, newEle);
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(2.2, 101, 102);  // Delete and add element
arr.splice(2, 0, 103);  // Add Element
arr.splice(5, 1);  // Delete element
arr.splice(7, 1, 104);  // Replace
arr.splice(4);  // This will act like slice and delete item starting from 4 till end
