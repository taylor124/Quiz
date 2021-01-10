//Create a quiz with a 500 second countdown That stays on the page whenever you move on to the next question.
//Create an interval that ends the game when these conditions are met:
//The timer is equal to or lesser than 0
//The Player answered all the questions.
//Create a variable for the questions with these conditions:
//When the Player guesses the question incorrectly, reduce the time by 30 seconds and keep them on the same page.
//When the Player guesses the question correctly, move on to the next question without penalty.
//If the Player guesses it wrong 3 times, Game over.


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
for (i = 0; i < 4; i++) {
    document.getElementsByClassName('correct')[i].addEventListener('click', function () {
        window.alert("Correct!");
    })
};

for (i = 0; i < 12; i++) {
    document.getElementsByClassName('false')[i].addEventListener('click', function () {
        window.alert("incorrect");
        
    })
};