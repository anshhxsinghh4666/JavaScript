// EVENTS : The change in the state of an object is known as an Event.
//          Events are fired to notify code of interesting changes that may affect code execution
//          Eg : Mouse Events(click , double click etc.) , Keyboard Events(keypress, keyup, keydown) etc.

/* Syntax : node.event = () => {
                handle here         
            }
*/

let btn1 = document.querySelector("#btn1")

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
};

// Note : If did inline event handling in HTML and JS event handling both then JS will be prioritize.
//        If we do event handling for same event multiple times then the last/latest code of the event will be executed only. Eg : If we write two event for btn1.onclick then the last/latest code will be executed or we can say the last/latest code will overwrite the last code.


/* Event Object : It is a special object that has details about the event.
                  All Event handlers have access to the event object's properties and methods .
    Syntax : node.event = (e) => {
                handle here 
            }
    e.target , e.type , e.clientX , e.clientY
*/

let btn2 = document.querySelector("#btn2");

btn2.onclick = (e) => { // e -> event
    console.log(e);  // Will print data of the event 
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.clientX, e.clientY);
}
// Similarly can be done with other events 


/* Event Listeners :    
        node.addEventListener(event, callback)
        node.removeEventListner(event, callback)
        (callback -> event handler (function))
        
        Note: The callback reference should be same to remove  
        We can generate multiple event listeners for a single event
*/

btn3.addEventListener("click", () => {  // here our function is =>
    console.log("button3 was clicked - handler -1 ");
})

btn3.addEventListener("click", () => {
    console.log("button3 was clicked - handler2");
})

const handler3 = () => {
    console.log("button3 was clicked - handler3");
};

btn3.addEventListener("click", handler3);

btn3.addEventListener("click", () => {
    console.log("button3 was clicked - handler4");
})
// So here both events will be executed. So this is the benefit as in normal event handling the last/latest event is executed as it overwrites on the previous once if multiple events are applied on same object

btn3.addEventListener("click", (e) => {
    console.log("button3 was clicked");
    console.log(e.type);
    console.log(e.target);
})

btn3.removeEventListener("click", handler3);
/* To remove the event we need to store it in the event  
    because oif we do 
    btn3.removeEventListener("click", () => {  
    console.log("button3 was clicked - handler4");
})
    This will create a seperate function and the event wont be removed 
    So to reference to it we need to store the evemt in a variable
*/





