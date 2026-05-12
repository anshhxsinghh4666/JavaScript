// DOM Part 2 : 


// Attributes : 

// getAttribute(attr) : to get the attribute value 
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");  // This will give the id of div;
console.log(id);
let id2 = div.getAttribute("name");  // This will give the name of div;
console.log(id2);
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// setAttribute(attr,value) : To set the attribute val th
console.log(para.setAttribute("class", "123")); // This will change class of para to 123 
// It'll show undefined on console but it'll show change in the elements section of inspect


// Style : node.style : This will show the inline style as well as style of the div 
console.log(div.style);
console.log(div.style.backgroundColor);
div.style.fontSize = "26px";
div.innerText = div.innerText + "  Ansh";


// Insert : 
let newBtn = document.createElement("button");  // This will create a new element button BUT it won't be visible on website yet
newBtn.innerText = "Click Me!";
console.log(newBtn);
let div_ = document.querySelector("div");  // This statement access the div

// node.append(el) : Adds at the end of node (inside)
console.log("node.append");
div_.append(newBtn); // Now button will be visible on website at the end of div

// node.prepend(el) : Adds at the start of node (inside)
console.log("Node.prepend");
// div_.prepend(newBtn); -> Will add the button at start of div

// node.before(el) : Adds before the node (outside)
console.log("node.before");
// div_.before(newBtn); -> Add the button outside before the div

// node.after(el) : Adds after the node (outside)
console.log("node.after");
// div_.after(newBtn); -> Add the button outside after the div

// Similarly we can do it with other elements 


// Delete Element : node.remove() -> Removes the node 
let para2_ = document.querySelector("#para2");
para2_.remove();  // Will remove this para 



