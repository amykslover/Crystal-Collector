var masterNumber = Math.floor(Math.random() * 80);
var crystal1 = Math.floor(Math.random() * 10)+1;
var crystal2 = Math.floor(Math.random() * 10)+1;
var crystal3 = Math.floor(Math.random() * 10)+1;
var crystal4 = Math.floor(Math.random() * 10)+1;
var crystal5 = Math.floor(Math.random() * 10)+1;
var countWins = 0;
var countLoss = 0;
var guessTotal = 0;

$("#wins").text("W: " + countLoss);
$("#losses").text("L: " + countLoss); 

function playAgain() {
    var result = confirm("Do you want to play again?");
    if(result) {
    resetGame();
    } else {
    $(location).attr('href', './goodbye.html');
    }   
};

function youLost() {
    alert("You lost!");
}

function youWon() {
    alert("You won!");
}

function checkStatus() {

    if (guessTotal === masterNumber) {
        countWins = countWins + 1;
        $("#wins").text(countWins);

        setTimeout(youWon,300);
        setTimeout(playAgain,1000);  
    }   

    if (guessTotal > masterNumber) {
        countLoss = countLoss + 1;
        $("#losses").text(countLoss); 

        setTimeout(youLost,300);
        setTimeout(playAgain,1000);  
    }
}

function resetGame() {

masterNumber = Math.floor(Math.random() * 80);
crystal1 = Math.floor(Math.random() * 10)+1;
crystal2 = Math.floor(Math.random() * 10)+1;
crystal3 = Math.floor(Math.random() * 10)+1;
crystal4 = Math.floor(Math.random() * 10)+1;
crystal5 = Math.floor(Math.random() * 10)+1;
guessTotal = 0;
$("#result").text(guessTotal);
$("#numberGuess").text(masterNumber);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(crystal5);
console.log(masterNumber);
};


$(document).ready(function(){


$("#numberGuess").text(masterNumber);

$("#result").text(guessTotal);

    if(guessTotal < masterNumber) {

        $("#gem1").click(function(){
            console.log("Console log:" + crystal1);
            guessTotal = guessTotal + crystal1;
            $("#result").text(guessTotal);
            checkStatus();
        });

        $("#gem2").click(function(){
            console.log("Console log:" + crystal2);
            guessTotal = guessTotal + crystal2;
            $("#result").text(guessTotal);
            checkStatus();

        });

        $("#gem3").click(function(){
            console.log("Console log:" + crystal3);
            guessTotal = guessTotal + crystal3;
            $("#result").text(guessTotal); 
            checkStatus();
        });

        $("#gem4").click(function(){
            console.log("Console log:" + crystal4);
            guessTotal = guessTotal + crystal4;
            $("#result").text(guessTotal);
            checkStatus();
        });

        $("#gem5").click(function(){
            console.log("Console log:" + crystal4);
            guessTotal = guessTotal + crystal5;
            $("#result").text(guessTotal);
            checkStatus();
        });

        } 
});
