let words = ["tortoise", "hitchhike", "pennywise","gargoyle", "licorice",
                    "holiday", "communication", "metropol", "continent", "university",
                    "popcorn", "worldwide", "vertebrae", "cylinder", "goliath",
                    "spatula", "dishwasher", "quintuple", "pentagon", "leprechaun"];
let selectedWord = words[Math.floor(Math.random() * words.length) + 1];
let maxAttempts = 5;
let attemptsLeft = maxAttempts;
let revealedLetters = Math.floor(Math.random() * 3) + 1
let usedLetters = document.getElementById("usedLetters");
let wordDisplay = document.getElementById("wordDisplay");
let letterInput = document.getElementById("letterInput");
let attempts = document.getElementById("attempts");
let resultPopup = document.getElementById("resultPopup");

let displayedWord = "";
for (let i = 0; i < selectedWord.length; i++) {
    if (i < revealedLetters) {
        displayedWord += selectedWord[i];
    }

    else {
        displayedWord += "_";
    }
}

wordDisplay.textContent = displayedWord;

function checkLetter() {
    let letter = letterInput.value.toLowerCase();

    if (selectedWord.includes(letter) || usedLetters.textContent.includes(letter)) {
        let newDisplayedWord = "";

        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                newDisplayedWord += letter;
            }

            else {
                newDisplayedWord += displayedWord[i];
            }
        }

        displayedWord = newDisplayedWord;

        wordDisplay.textContent = displayedWord;

        if (!displayedWord.includes("_")) {
            showResultPopup(true);
            disableInput();
        }
    }

    else {
        attemptsLeft--;
        usedLetters.textContent += (letter + " ");
        
        
        attempts.textContent = `Tries ${attemptsLeft}`;
        if (attemptsLeft === 0) {
            showResultPopup(false);
            disableInput();
            displayedWord.textContent = selectedWord;
        }
    }

    letterInput.value = "";
}

function showResultPopup(success) {
    resultPopup.textContent = success ? "You guessed the correct word!" : "You ran out of guesses.";
    resultPopup.style.color = success ? "green" : "red";
    resultPopup.style.display = "block";
}

function startNewGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = maxAttempts;
    revealedLetters = Math.floor(Math.random() * 3) + 1;
    displayedWord = selectedWord.slice(0, revealedLetters) + "_".repeat(selectedWord.length - revealedLetters);
    wordDisplay.textContent = displayedWord;
    attempts.textContent = `Tries ${attemptsLeft}`;
    resultPopup.style.display = "none";
    usedLetters.textContent = "";
    letterInput.disabled = false;
    document.querySelector('button').disabled = false;
}

function disableInput() {
    letterInput.disabled = true;
    document.querySelector('button').disabled = true;
}