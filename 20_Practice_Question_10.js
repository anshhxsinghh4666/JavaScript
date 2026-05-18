// Create a new button element. 
// Give it a text “click me”, background color of red & text color of white.

// Insert the button as the first element inside the body tag.

const button1 = document.createElement('button');
button1.textContent = 'click me';
button1.id = 'but1';
button1.style.backgroundColor = 'red';
button1.style.color = 'white';

const firstChild = document.body.firstChild;
/*finds the current first child node inside <body>
this can be a text node, element, or existing element already there
*/

document.body.insertBefore(button1, firstChild);
/*inserts button1 before that first child
so the new button becomes the first element inside <body>
*/