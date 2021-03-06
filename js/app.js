// DiCE GAME

let scores, roundScore, activePlayer, gameState;
let diceBox = document.querySelector(".dice");
newGame();

document.querySelector(".btn-new").addEventListener("click", newGame);
document.querySelector(".btn-roll").addEventListener("click", function() {
    
    if (gameState) {
        diceBox.style.display = "block";
        // get the random number
        let dice = Math.floor(Math.random() * 6) + 1;
        // display the result
        diceBox.src = 'images/dice-' + dice + '.png';
        // update the round score if the rolled number is not 1
        if (dice !== 1) {
            //Add score to current player
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            // Next player turn
            changePlayer();
            toggleActiveDisplay();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {

    if(gameState) {
        scores[activePlayer] += roundScore;
        updateScores();

        if (scores[activePlayer] >= 100) {
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
            gameState = false;
        } else {
            changePlayer();
            toggleActiveDisplay();
        }
    }
});

function updateScores() {
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
}

function changePlayer() {
    // Next player turn
    document.getElementById("current-" + activePlayer).textContent = "0";
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
}

function toggleActiveDisplay() {
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceBox.style.display = "none";
}

function newGame() {
    gameState = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    diceBox.style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
}
