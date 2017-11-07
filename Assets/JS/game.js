 //database of characters
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var guessesList= [];
 

// userGuess is what the user picks by pressing a key

//to reset game function
function reWriteStats() {
   guessesLeft = 9;
   guessesList= [];
   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
       
document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var userGuess = event.key.toLowerCase();
        
        

        //when user guess does not match computer generated guess-- change guessesleft,list values in real time
        if (userGuess != computerGuess) {
         for(i=0; i<guessesList.length;i++) { 
         // if a character is repeated does not reduce  the guessesleft and prompts to try again
         if (userGuess === guessesList[i])
         {
         alert("You already entered this key, try a different key"); 
         
         guessesList.splice(i,1);
         guessesLeft+=1;
         console.log(guessesList);
          console.log(guessesList[guessesList.length-1]);
         }
         }
         guessesLeft-=1;
         guessesList.push(userGuess);
         document.getElementById("guessesLeft").textContent = guessesLeft;
         document.getElementById("guesses").textContent = guessesList;
         console.log("computer guess="+ computerGuess);
         console.log(userGuess); 
         
        }
        //when number of guesses left become 0 - user lost and stats need to be reset

        if (guessesLeft === 0) {
        losses+=1;
        console.log("You lost");
        document.getElementById("losses").textContent = losses;
        reWriteStats();
        document.getElementById("guessesLeft").textContent = guessesLeft;
        document.getElementById("guesses").textContent = guessesList;
        }

        //when guess matches user wins and stats need to be reset      
        if (userGuess === computerGuess) {
         wins+=1;
         document.getElementById("wins").textContent = wins;
         reWriteStats();
         document.getElementById("guessesLeft").textContent = guessesLeft;
         document.getElementById("guesses").textContent = guessesList;
         console.log("You won!");
        
        }

}        


        
 
