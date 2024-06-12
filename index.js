 
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

function checkGuess() {
    const guess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (guess === randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed the right number!';
        resetGame();
    } else if (attempts >= maxAttempts) {
        document.getElementById('feedback').textContent = `Sorry, you've used all your attempts. The number was ${randomNumber}.`;
        resetGame();
    } else if (guess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    }

    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${maxAttempts}`;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('attempts').textContent = '';
}
