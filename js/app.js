/* ----------------------------------------------------------- */
/* ---------------------- Cached Elements -------------------- */
/* ----------------------------------------------------------- */

// cached elements for status indicators
const boredomStat = document.querySelector("#boredom-stat");
const hungerStat = document.querySelector("#hunger-stat");
const sleepyStat = document.querySelector("#sleepiness-stat");

// cached element for button wrapper (for event bubbling)
const gameButtons = document.querySelector(".button-wrapper");

// pop-up game message element (HTML that starts hidden)
const gameMessage = document.querySelector("#message");
const restartMessage = document.querySelector("#restart");

/* ----------------------------------------------------------- */
/* -------------------- Arrays & Variables ------------------- */
/* ----------------------------------------------------------- */

const state = {
	boredom: 0,
	hunger: 0,
	sleepiness: 0,
};

let gameOver = false;

/* ----------------------------------------------------------- */
/* ------------------------ Functions ------------------------ */
/* ----------------------------------------------------------- */

// function that holds main game
const init = () => {
	// timer function (arguments go here)
	let timer = setInterval(runGame(), 2000);
};

const runGame = () => {
	console.log("Game is running!");
};

const render = () => {

}

const updateStates = () => {
    state.boredom += Math.random()
    state.hunger += Math.random()
    state.sleepiness += Math.random()
}

const randomNum = (min, max) => {
    // used to ensure even weighting when setting a minimum
    let interval = (max - min) + 1
    // this method ensures it doesn't go below min or above max
    return Math.floor(Math.random() * interval) + min
}

/* ----------------------------------------------------------- */
/* ------- Un-Nested Event Listeners & Called Functions ------ */
/* ----------------------------------------------------------- */

init()