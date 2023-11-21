/*
DICE GAME REQUIREMENTS
    Create a dice game where a user plays against the computer. The user and the computer eachroll a pair of dice 3 times. After the third roll of the dice the player with highest score wins.

    The scoring for the game works as follows:
    - If any of the players two dice comes up as a 1 then the score for that round for the playeris 0. eg: if the player rolls a 6 and 1, they get a score of 0
    - If the player rolls a pair of the same numbers then the players score is the total of thetwo dice times 2. eg: if he player rolls 5 and 5, they get a score of (5+5)*2=20
    - If the player rolls any other combination of dice other than the ones mentioned abovethen the players score is the total value of the two dice, eg: player rolls a 3 and 2, playergets a score of 3+2=5
    
    The game should provide a text or graphical output showing the following:
    - The current rolled dice values for the player and the computer.
    - The score for this round for the player and the computer.
    - The accumulated total score for the player and computer
    
    The game should provide a button that will do the following: roll a pair dice for the player and another pair of dice for the computer, calculate the score for each of the player’s then update the browser display to reflect the state of the game.
    
    After three rolls of the dice the game should total up the scores and display a message displaying who the winner was.
    
    The game should provide a button that will reset the game and start a new game

------------------------------------------------------------------------------------------------------

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

