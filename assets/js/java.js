//Create a quiz with a 500 second countdown That stays on the page whenever you move on to the next question.
//Create an interval that ends the game when these conditions are met:
//The timer is equal to or lesser than 0
//The Player answered all the questions.
//Create a variable for the questions with these conditions:
//When the Player guesses the question incorrectly, reduce the time by 30 seconds and keep them on the same page.
//When the Player guesses the question correctly, move on to the next question without penalty.
//If the Player guesses it wrong 3 times, Game over.

var timeLimit = 500;

    function countdown(){
        timeLimit--; // or totalTime = totalTime -1, or totalTime-=1;
        console.log(timeLimit);
        if(timeLimit<=0){
            window.clearInterval(countdowntimer);
        }
    }
    
    var countdowntimer = setInterval(countdown, 1000);