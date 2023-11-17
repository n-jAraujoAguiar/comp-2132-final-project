
// this initializes variables needed for things.

let animationFunction;
let popupTimeout;
let showPopup;
let letAnimationPlay;
let lastImageShown;


let   imageNumber   = 1;
const minImgNum     = 1;
const maxImgNum     = 33;
const imageAddress  = "product-images/";
const imageName     = "bike-";
const imageFormat   = ".jpg";
const frameRate     = 100;
const timeoutTime   = 3000;

// get the page elements
const displayImage      = document.getElementById("display-image");
const startButton       = document.getElementById("start");
const stopButton        = document.getElementById("stop");
const popupContainer    = document.getElementById("popup-container");
const popupMessage      = document.getElementById("popup");
const popupCloseButton  = document.getElementById("close-popup");

// here are the functions related to the display image animation.
function startAnimation() {

    if(letAnimationPlay) {
            return;
    }

    letAnimationPlay = true;

    animationFunction = requestAnimationFrame(animate);

}

function animate(timestamp) {

    let imgNumInRange = (imageNumber >= minImgNum && imageNumber <= maxImgNum);

    if (imgNumInRange) {

        updateImgNumber(1);

    } else if(imageNumber > maxImgNum) {

        imageNumber = minImgNum;

    } else {

        console.log("image number is less than min image number: \n current image number: " + imageNumber + "\ncurrent min image number: " + minImgNum);

    }

    setTimeout(function(){
        if (letAnimationPlay) {
            animationFunction = requestAnimationFrame(animate);
        } 
    }, frameRate)

    
}

// This changes the src of the display image.
function updateImgNumber(modifier) {

    imageNumber = imageNumber + modifier;
    displayImage.src = imageAddress + imageName + imageNumber + imageFormat; 
    
}

// This should stop the animation on the current image.
function stopAnimation() {

    letAnimationPlay = false;
    clearInterval(animationFunction);

    // this saves the last image shown into memory.
    lastImageShown = displayImage.src;
    console.log(lastImageShown);
}

// here start the functions for the popup.  
function popupShow() {
    popup.classList.toggle("show");
    showPopup = true;
}

// this stops the timeout.
function clearPopup() {
    clearTimeout(popupTimeout);

    if (showPopup) {
        popup.classList.toggle("show"); 
        showPopup = false;
    }
}

// these wait for the user to click the start and stop buttons for the animation to start/stop.
startButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);

// this starts the timeout for the popup to show.
popupTimeout = setTimeout(popupShow, timeoutTime);

// this stops the timeout 
startButton.addEventListener('click', clearPopup);
popupCloseButton.addEventListener('click', clearPopup);
