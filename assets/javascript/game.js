// Set variables
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var animals = ["zebra", "tiger", "lion", "giraffe", "hyena", "wildebeest", "monkey", "orangutan", "chimpanzee", "cheetah"];
var userGuesses = [];
var orderedGuesses=[];
var displayWord = [];
var usedWords = [];
var wins = 0;
var losses = 0;
var strikes = 0;
var strikesAllowed = 12;
var hung = false;
var winsHTML = document.getElementById("wins");
var strikesHTML = document.getElementById("strikes");
var leftColumn = document.getElementById("left-column");
var guessesDiv = document.getElementById("guesses");
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/chimp.mp3");
// Choose a word at random
var word = animals[Math.floor(Math.random() * (animals.length))];
console.log('word= ' + word);

// Set the display to all blanks 
for (i = 0; i < word.length; i++) {
    displayWord.push(" __ ");
}
console.log(displayWord);
reWriteStats();
// find the key pressed
letterCheck();


// re-write the wins, guesses remaining etc.
function reWriteStats() {
    var displayWordText = '\<br\>';

    for (i = 0; i < displayWord.length; i++) {
        displayWordText += displayWord[i];
    }

    leftColumn.innerHTML = displayWordText;
    guessesDiv.innerHTML = ("Letters guessed: \<br\>" + orderedGuesses + " ");

    // CREATE LETTER BUTTONS
    // for(var i=0; i<alphabet.length;i++){
    //     var letterBtn =document.createElement("button");
    //           letterBtn.textContent =alphabet[i];
    //     guessesDiv.appendChild(letterBtn);
      
    //           letterBtn.setAttribute("class", "letter-button letter letter-button-color");
    //           letterBtn.setAttribute("data-letter",alphabet[i]);
    //         }
        
    winsHTML.innerHTML = ("Wins: " + wins);
    strikesHTML.innerHTML = ("Strikes remaining:"+ (strikesAllowed-strikes));
};







function newGame() {
    strikes = 0;
    usedWords += word;
    usedWord = false;
    do {

        word = animals[Math.floor(Math.random() * (animals.length))];
        for (i = 0; i < usedWords.length; i++) {

            if (word == usedWords[i]) {
                usedWord = true;
            }
        }
    }
    while (usedWord)
    console.log('word= ' + word);
    userGuesses = [];
    orderedGuesses = [];
    displayWord = [];
    for (i = 0; i < word.length; i++) {
        displayWord.push(" __ ");
    }
    console.log(displayWord);
    reWriteStats();
};

// add chosen letters to letter bank
function userGuessedLetters(a) {
    for(var i=0;i<alphabet.length;i++){
            
        if(alphabet[i].toLowerCase()==a){
                console.log("Guessed letters: ");
        userGuesses.push(a);
        orderedGuesses=userGuesses.sort();
        }
    };};
    

function letterCheck() {
    var letter = '';
    document.onkeyup = function (event) {
        console.log(event);
        keyPressed = event.key;
        // convert to lowercase
        letter = keyPressed.toLowerCase()
        console.log("letter = " + letter);
        // add that letter to the users guesses
        var alreadyGuessed = false;
        var isLetter = false;
        for (i = 0; i < alphabet.length; i++) {
            if (letter == alphabet[i].toLowerCase()) {
                isLetter = true;
            }
        }
        if (isLetter) {
            for (i = 0; i < userGuesses.length; i++) {
                if (letter == userGuesses[i]) {
                    alreadyGuessed = true;
                }
            }

            // Is the users letter found in the word?
            var letterFound = false;
            if (!alreadyGuessed) {
                userGuessedLetters(letter);
                for (var i = 0; i < word.length; i++) {
                    console.log(word[i]);
                    for (var j = 0; j < userGuesses.length; j++) {
                        if (letter[j] == word[i]) {
                            displayWord[i] = " " + letter[j] + " ";
                            letterFound = true;
                            console.log("Found letter")
                        }
                    }
                }


                // add a hangman part if incorrect guess
                if (!letterFound) {
                    console.log("Letter not found!");
                    strikes++
                }
            }


            // render all hangman strikes
            for (var i = 0; i < strikes; i++) {
                // add hangman part
                console.log("Hangman Part: " + i);
            }

            // check if word is complete
            var completeWord = true;
            for (var i = 0; i < displayWord.length; i++)
                if (displayWord[i] == " __ ") {
                    completeWord = false;
                }
            console.log("Complete Word? " + completeWord);

            //    display current blanks/letters
            console.log(displayWord);

            // increment wins/losses
            if (completeWord) {
                wins++;
                audioElement.play()
            }
            if (hung) {
                losses++;
            }

            reWriteStats();

            if (hung || completeWord) {
                newGame();
            }
        }
        if(strikesAllowed-strikes==0){
            alert("Game Over");
            newGame();
        } };

}

// add pieces of the hangman for wrong guesses


// Victory screen

// You lose screen

 // Create an "on-click" event attached to the ".letter-button" class. 
//  Write a function that will make letters turn green if correct and red if not when clicked or pressed 
// add that function to the onkeyup event too.














































      // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
