/*
This I am having trouble with:
    Line 42: how do I send parameters to requestAnimationFrame? using "function()" instead of "function" calls it only once.
*/

// these variables store the dice elements from the html page. 
const htmlPlayerDieOne     = document.getElementById("player-dice-one");
const htmlPlayerDieTwo     = document.getElementById("player-dice-two");
const htmlComputerDieOne   = document.getElementById("computer-dice-one");
const htmlComputerDieTwo   = document.getElementById("computer-dice-two");


const DICE_MAX = 6;
const DICE_MIN = 1;
const DICE_SRC_BASE = "source/images/dice-";
const DICE_SRC_FILE = ".png";
const FRAME_RATE_MS = 50;

let animationFunction; // this variable stores the animation status

let letAnimationPlay = false;



let playerLastDiceCombo         = [];
let playerSecondLastDiceCombo   = [];
let playerThirdLastDiceCombo    = [];

let computerLastDiceCombo       = [];
let computerSecondLastDiceCombo = [];
let computerThirdLastDiceCombo  = [];

// this function controls the logic of the animation. Ergo, stops multiple instances.
function startAnimation(die) {

    if(letAnimationPlay) {
            return;
    }

    letAnimationPlay = true;

    animationFunction = requestAnimationFrame(dieAnimation); // how do I send it parameters? 
    
    setTimeout(function(){
        if (letAnimationPlay) {
            animationFunction = requestAnimationFrame(dieAnimation);
        } 
    }, FRAME_RATE_MS)

}

// this function stops the dice animation
function stopAnimation() {

    letAnimationPlay = false;
    clearInterval(animationFunction);

}

// this function will make the diceImage element while it "loads" the dice.
function dieAnimation(die, dieNumber) {



    die.getAttribute("scr") = DICE_SRC_BASE + dieNumber + DICE_SRC_FILE;
}

// this function will return a number between 1 and 6.
function getDieNumber() {

    return Math.floor(Math.random() * DICE_MAX) + DICE_MIN;

}

// this function will kickoff all the dice rlling functions.
function rollDice() {

    let playerDieOne;
    let playerDieTwo;
    let computerDieOne;
    let computerDieTwo;


    // step 1: call the dice rolling animation

    // step 2: get them dice
    playerDieOne    = getDieNumber();
    playerDieTwo    = getDieNumber();
    computerDieOne  = getDieNumber();
    computerDieTwo  = getDieNumber();


}

