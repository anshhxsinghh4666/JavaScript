// Create a H2 heading element with text - "Hello JavaScript".
//  Append "From Apna College Students" to this text using JS.

// Create 3 divs with common class name - "box". Access them and add some unique text to each of them.  

const heading = document.createElement('h2');
heading.textContent = 'Hello JavaScript';
heading.textContent += ' From Apna College Students';
heading.id = 'head1';
document.body.appendChild(heading);

for (let i = 1; i <= 3; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = `Box ${i}: This is unique text for box ${i}.`;
  document.body.appendChild(box);
}
