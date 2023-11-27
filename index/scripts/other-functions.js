// review session 7

// variables that store the DOM elements
const htmlPlayButton  = document.getElementById("play-button");
const htmlRollButton  = document.getElementById("roll-button");
const htmlPlayArea    = document.getElementsByClassName("play-area");
const htmlExplanation = document.getElementById("explanation");

function hideClass(htmlClass) {
    if(htmlClass.checkVisibility()) {
        htmlClass.classList.toggle("hide");
    }
}

function showClass(htmlClass) {
    if(!htmlClass.checkVisibility()) {
        htmlClass.classList.toggle("show");
    }
}

function hideElement(element) {
    htmlExplanation.checkVisibility()
}

htmlPlayButton.addEventListener("click", function() {

    hideElement(htmlExplanation);
    showElement(htmlPlayArea);


});
htmlRollButton.addEventListener("click", showElement(htmlRollButton));