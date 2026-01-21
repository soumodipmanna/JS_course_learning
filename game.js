// Number Guessing Game

// 1. Generate a random secret number between 1 and 10
// Math.random() gives 0.1 to 0.9. Multiplying by 10 gives 0 to 9. Adding 1 gives 1 to 10.
var secretNumber = Math.floor(Math.random() * 10) + 1;

var usernumber = 0; 
while (usernumber !== secretNumber) {
    let input = prompt("Guess a number between 1 and 10:");
    usernumber = parseInt(input);
    if (usernumber === secretNumber) {
        alert("🎉 Correct! You won!");
    } 
    else if (usernumber > secretNumber) {
        alert("Too high! Try again.");
    } 
    else {
        alert("Too low! Try again.");
    }
}
