// Create a game where you start with any random game number. Ask the user to keep
// Guessing the game number until th euse enters the correct value.

let gameNum = 25;

let userNum = prompt('Guess the Game Number');
console.log(gameNum);

while (userNum != gameNum) {
  userNum = prompt('You entered wrong number. Guess Again : ');
}
console.log('Congratulations , You have entered the right number');
