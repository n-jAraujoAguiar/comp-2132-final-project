// review session 7

// variables that store the DOM elements
const $PlayButton  = $("#play-button");
const $RollButton  = $("#roll-button");
const $PlayArea    = $(".play-area");
const $Explanation = $("#explanation");
const $DiceArea    = $(".dice-area");
const $DiceImage   = $(".dice-image");

const htmlPlayButton = document.getElementById("play-button");
const htmlRollButton = document.getElementById("roll-button");


function showElement(element) {
        element.classList.toggle("show");
}

function hideElement(element) {
        element.classList.toggle("hide");
}

htmlPlayButton.addEventListener("click", function() {
    

    setTimeout(() => {
        $PlayArea.fadeIn();
        $PlayArea.css("display", "flex");
    }, 505)
    
    $Explanation.fadeOut(500);
});

$RollButton.click(function() {
    $DiceArea.css('visibility', "visible");
    $DiceImage.css("width", "40%");
    $DiceImage.css("padding", "2%");
    $DiceImage.css("align");
    rollDice();
    }
);

// htmlRollButton.addEventListener("click", function() {
//     $DiceArea.css('visibility', "visible");
//     rollDice();
// });


