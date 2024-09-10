let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
const userInput = document.getElementById('user');
const submit = document.getElementById('submit');
const PreviousGuess = document.getElementById('prevGuess');
const remainingGuesses = document.getElementById('RemainingGuesses');
const messageField = document.getElementById('message');
const newGame = document.getElementById('newGame')

let reamainingGuessCount = 10;
let displayMesssage = '';
let play = true;
let previousGuessArr = [];

if (play) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (parseInt(userInput.value) <= 100 && parseInt(userInput.value) >= 1) {
            let guess = userInput.value;
            reamainingGuessCount--
            if (reamainingGuessCount == 0) {
                resetInput();
                endGame();
            }
            remainingGuesses.innerText = `Remaining Guesses ${reamainingGuessCount}`
            pushPreviousGuess(guess);
        } else {
            alert("Please Enter a valid Number between 1 to 100");
        }
    })
}

function pushPreviousGuess(guess) {
    console.log(previousGuessArr)
    previousGuessArr.push(guess);
    console.log(previousGuessArr)
    PreviousGuess.innerText = `${previousGuessArr}`
    showMessage(guess);
}

function showMessage(guess) {
    if (guess == randomNumber) {
        displayMesssage = `Congratulations!!! Your Guess is Correct`
        messageField.innerHTML = displayMesssage;
        resetInput();
        endGame();
    } else if (guess > randomNumber) {
        displayMesssage = `Your Guess is Greater than the Random Number`
        messageField.innerHTML = displayMesssage;
        resetInput();
    } else {
        displayMesssage = `Your Guess is Lower than the Random Number`
        messageField.innerHTML = displayMesssage;
        resetInput();
    }
}

function resetInput() {
    userInput.value = '';
}

function endGame() {
    newGame.innerText = "New Game";
    newGame.classList.add('active');
    userInput.setAttribute('disabled', '');
    play = false;
    startGame();
}

function startGame() {
    newGame.addEventListener('click', (e) => {
        previousGuessArr = [];
        PreviousGuess.textContent = ''
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber)
        reamainingGuessCount = 10;
        remainingGuesses.innerText = `Remaining Guesses ${reamainingGuessCount}`
        messageField.textContent = '';
        userInput.removeAttribute('disabled', '');
        newGame.innerText = ''
        newGame.classList.remove('active');
        play = true;
    })
}