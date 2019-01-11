let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-1").textContent = "0";

let diceBox = document.querySelector(".dice");
diceBox.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
    
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
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    updateScores(roundScore);
    changePlayer();
    toggleActiveDisplay();
});


function updateScores(num) {
    let current = parseInt(document.querySelector("#score-" + activePlayer).textContent);
    let updated = (current + num).toString();
    document.querySelector("#score-" + activePlayer).textContent = updated;
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