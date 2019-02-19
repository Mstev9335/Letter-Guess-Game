            
              //variables
                var computerChoice = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]                

                 var wins = 0;
                 var losses = 0;
                 var guesses = 10;
                 var guessedLetters = [];
                 var letter;

                 //display
                 document.getElementById("wins").innerHTML = wins;
                 document.getElementById("losses").innerHTML = losses;
                 document.getElementById("guesses").innerHTML = guesses;
                 document.getElementById("guessed").innerHTML = guessedLetters;


                //function to have computer pick a letter at random
                function compGuess(){
                  letter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
                  
                  //console log to test
                  console.log(letter);
                  return letter;
                }
                
                // call function to have computer get a letter
                compGuess();

                // function to get user guess
                document.onkeyup = function(event) {

                // Determines which key was pressed.
                var userGuess = event.key;
                

                // conditionals to determine wins and losses
                if(userGuess===letter){
                  wins++;
                  // display new wins
                  document.getElementById("wins").innerHTML = wins;

                  // start game over
                  compGuess();
                  guesses = 10;
                  // display new guesses
                  document.getElementById("guesses").innerHTML = guesses;

                  // display guessed letters
                  guessedLetters = [];
                document.getElementById("guessed").innerHTML = guessedLetters;
                

                }
                else{
                  guesses--;

                  // display new guesses
                  document.getElementById("guesses").innerHTML = guesses;

                  // Store the guess into the guessedLetters array.
                guessedLetters.push(userGuess);

                  // display guessed letters
                document.getElementById("guessed").innerHTML = guessedLetters;

                }

                if(guesses===0){
                  losses++;
                  // display new losses
                  document.getElementById("losses").innerHTML = losses;
                  compGuess();
                  guesses = 10;
                  // display new guesses
                  document.getElementById("guesses").innerHTML = guesses;
                   // display guessed letters
                   guessedLetters = [];
                document.getElementById("guessed").innerHTML = guessedLetters;
                }

                };          
             