//Create a quiz with a 500 second countdown That stays on the page whenever you move on to the next question.
//Create an interval that ends the game when these conditions are met:
//The timer is equal to or lesser than 0
//The Player answered all the questions.
//Create a variable for the questions with these conditions:
//When the Player guesses the question incorrectly, reduce the time by 30 seconds and keep them on the same page.
//When the Player guesses the question correctly, move on to the next question without penalty.
//If the Player guesses it wrong 3 times, Game over.

var display = document.querySelector('#time');
var fiveMinutes = 60 * 5;
var timer = fiveMinutes;
window.onload = function () {
    startTimer();
};


var setIntervalfunction = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    timer-- ;
    console.log(timer)
    if (timer === -1) {
        clearInterval(setIntervalfunction);
        window.alert("time is up");

    };


}, 1000);

function startTimer() {

    setIntervalfunction;


    for (i = 0; i < 4; i++) {
        document.getElementsByClassName('correct')[i].addEventListener('click', function () {
            window.alert("Correct!");
        })
    };

    for (i = 0; i < 12; i++) {
        document.getElementsByClassName('false')[i].addEventListener('click', function () {
            window.alert("incorrect");
            timer -= 29;
        })
    };
};








