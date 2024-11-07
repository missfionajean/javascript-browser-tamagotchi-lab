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

const states = {
	boredom: 0,
	hunger: 0,
	sleepiness: 0,
};

let gameOver = false;
let timer;

/* ----------------------------------------------------------- */
/* ------------------------ Functions ------------------------ */
/* ----------------------------------------------------------- */

// function that holds main game
const init = () => {
	// timer that calls function at set timed intervals
	timer = setInterval(updateGame, 4000);
};

const updateGame = () => {
	updateStates();
	render();
};

const render = () => {
	// innerText = visible only; textContent = visible + hidden
	// textContent should be default (supported by more browsers)
	boredomStat.textContent = states.boredom;
	hungerStat.textContent = states.hunger;
	sleepyStat.textContent = states.sleepiness;
};

const updateStates = () => {
	states.boredom += randomNum(0, 3);
	states.hunger += randomNum(0, 3);
	states.sleepiness += randomNum(0, 3);
};

const randomNum = (min, max) => {
	// used to ensure even weighting when setting a minimum
	let interval = max - min + 1;
	// this method ensures it doesn't go below min or above max
	return Math.floor(Math.random() * interval) + min;
};

/* ----------------------------------------------------------- */
/* ------- Un-Nested Event Listeners & Called Functions ------ */
/* ----------------------------------------------------------- */

init();
