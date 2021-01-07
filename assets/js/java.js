

//Create a quiz with a 500 second countdown That stays on the page whenever you move on to the next question.
var timer = 500;
//Create an interval that ends the game when these conditions are met:
//The timer is equal to or lesser than 0
//The Player answered all the questions.
function countdown()
{
    timer--; // or totalTime = totalTime -1, or totalTime-=1;
    console.log(timer);
    if(timer<=0){
        window.clearInterval(countdowntimer);
    }
}

var countdowntimer = setInterval(countdown, 1000);


//Create a variable for the questions with these conditions:
//When the Player guesses the question incorrectly, reduce the time by 30 seconds and keep them on the same page.
//When the Player guesses the question correctly, move on to the next question without penalty.
//If the Player guesses it wrong 3 times, Game over.



