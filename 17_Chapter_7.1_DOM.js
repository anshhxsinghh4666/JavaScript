// DOM Part 1 :


console.log('Hello');
alert('Apna College');


// Window Object : The window object represents an open window in a browser.
//        It is browser's object (not JS) & automatically created by browser.
//        It is a global object with lots of properties & methods
console.log('Window');
console.log(window);
window.console.log('Hello')
// Console.log and many more are part of window object and the code already knows that thats why we
// directly write console.log() and not windows.console.log() though it also won't give an error


/* What is DOM ?
When a web page is loaded , the browser creates a Document Object Model (DOM) of the page  
The HTML code apeears as a sub object of window object.
Open Window object -> Go to document -> In URL you'll get link of HTML file and other things as well related to HTML
Therefore in document object we'll get the whole HTML code.
Therefore the document which contains the HTML is called DOM. It has a tree like structure
*/
console.log('Window Document');
console.dir(window.document);  // OR console.dir(document) As window is a global object
console.dir(document.body);  // Opens body section of HTML
console.dir(document.head);  // Opens head section of HTML
console.dir(document.body.childNodes[1]);
// document.body.style.background = "green" -> This will change the background color to green. So you can do this changes dynamically in console using JS only , can't be done with HTML or CSS
// document.body.childNodes[3].innerText = "abcd"


// 🔥 Key Differences between console.log and console.dir :

// 1. Purpose:
// console.log() → General output / debugging
// console.dir() → Inspect object properties in detail

// 2. Output Format:
// console.log() → Normal readable format
// console.dir() → Tree-like structure of object

// 3. Usage:
// console.log() → Used most of the time
// console.dir() → Used for DOM or complex objects

// ⚠️ Important Exam Point:
// console.dir() is mainly used to explore DOM elements and objects
// console.log() is used for normal debugging

// NOTE :Check HTML File for a note


// DOM Manipulation :

// Selecting with Id : document.getElementBYid("myId")
//        It returns value of myId so store it in a variable
console.log('Selecting with Id');
let heading = document.getElementById('head1');
console.dir(heading);  // We used console.dir beacause h1 is an object

// Selecting with Class : document.getElementsByClassName("myClass")
//        It returns an HTML collection
console.log('Selection with Class');
let topic = document.getElementsByClassName('.Topic');
console.dir(topic);

// Selecting with Tag : document.getElementsByTagName("TagName")
console.log('Selecting using Tag Name');
let parah = document.getElementsByTagName('p');
console.dir(parah);

// Query Selector : document.querySelector("myId/myClass/tag") -> Returns first element
//                  document.querySelectorAll("myId/myClass/tag") -> Returns a NodeList
console.log('Query Selector');
let ele = document.querySelector('p');
console.dir(ele);
let ele_ = document.querySelectorAll('p');
console.dir(ele_);
let class_ = document.querySelectorAll('.topic');
console.dir(class_);


// Properties :

// tagName : Returns tag for element nodes
ele.tagName;

// innerText : Returns the text content of the element and all its children
console.log('innerText');
let div = document.querySelector('div');
console.dir(div.innerText)
let div2 = document.querySelector('#text');
div2.innerText = 'abcd';  // Text inside the div will be changed to 'abcd'

// innerHTML : Returns the plain text or HTML contents in the element
console.log('innerHTML');
console.dir(div.innerHTML);
let div3 = document.querySelector('#text2');
div3.innerHTML = "<div>Hello</div>";  // Will create a new div inside the div3
// NOTE : We can write HTML Tags using innerHTML

// textContent : Returns textual content even for hidden elements
console.log('textContent')
let hid = document.querySelector('#hidden');
console.dir(hid.innerText);
console.dir(hid.textContent);



// firstChild :
console.log('FirstChild');
console.dir(document.body.firstChild);

// lastChild :
console.log('LastChild');
console.dir(document.body.lastChild);
