// review session 7

// variables that store the DOM elements
const $PlayButton  = $("#play-button");
const $RollButton  = $("#roll-button");
const $RetryButton = $("#retry-button");
const $PlayArea    = $(".play-area");
const $Explanation = $("#explanation");
const $DiceArea    = $(".dice-area");
const $DiceImage   = $(".dice-image");
const $Results     = $("#game-result");
const $ResultImg   = $("#result-image");
const $ResultQuote = $("#result-quote");

const htmlPlayButton = document.getElementById("play-button");
const htmlRollButton = document.getElementById("roll-button");

const FADE_DURATION_MS      = 500;
const RESULT_DUR_MS         = 4000;
const DEFAULT_DISPLAY       = "flex";
const ROUND_WIN_IMG         = "source/images/luffy-win.gif";
const ROUND_DRAW_IMG        = "source/images/luffy-draw.gif";
const ROUND_LOSE_IMG        = "source/images/luffy-lose.gif";
const GAME_WIN_IMG          = "source/images/nami-lose.gif";
const GAME_LOSE_IMG         = "source/images/nami-win.gif";
const GAME_WIN_QUOTE        = "Yes! you've won! But at what cost? Nami is now crying... You give her your bellies anyways...";
const GAME_LOSE_QUOTE       = "Oh no! you've lost! Now Nami will take all your Bellies!"

function transitionElements(inElement, inElementDisplay, outElement = null) {
    setTimeout(() => {

        inElement.fadeIn();
        inElement.css("display", inElementDisplay);

    }, FADE_DURATION_MS);

    if(outElement != null) {
        outElement.fadeOut(FADE_DURATION_MS);
    }
}

$PlayButton.on("click", function() {
    transitionElements($PlayArea, DEFAULT_DISPLAY, $Explanation);
    callUpdater();
    transitionElements($DiceImage, DEFAULT_DISPLAY);
});

$RollButton.click(rollDice);

function announceResults(result){ 

    // update this so that the result screen shows the result.
    if(result === null) {
        $ResultImg.attr("src", ROUND_DRAW_IMG);
        $ResultQuote.html(DRAW_QUOTE);
    } else if(result) {
        $ResultImg.attr("src", ROUND_WIN_IMG);
        $ResultQuote.html(WIN_QUOTE);
    } else { 
        $ResultImg.attr("src", ROUND_LOSE_IMG);
        $ResultQuote.html(LOSE_QUOTE);
    }

    $Results.css('display', 'flex');

    $Results.animate({
        height:     '40%',
        width:      '40%', 
        left:       '50%',
        right:      '50%'
        
    });

    setTimeout(() => {
        
        $Results.animate({
            left:       '100%',
            height:     '0%',
            width:      '0%'
        })

        $Results.fadeOut();
        


    }, RESULT_DUR_MS);

    $Results.css('left', '0%');
    $Results.css('right', '100%')
}

function endGameAnimation() {
    $Results.animate({
        left: '50%',
        right: '50%',
        width: '60%',
        height: '40%'
    })
}

function endGame(playerWin) {

    if(playerWin) {
        $ResultImg.attr("src", GAME_WIN_IMG);
        $ResultQuote.html(GAME_WIN_QUOTE);
        endGameAnimation();
    
    } else {
        $ResultImg.attr("src", GAME_LOSE_IMG);
        $ResultQuote.html(GAME_LOSE_QUOTE);
        endGameAnimation();

    }

    $RetryButton.fadeIn();

}

$RetryButton.click(location.reload)