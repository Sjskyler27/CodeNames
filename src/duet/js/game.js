import {Solution} from "./solution.js";
import { ColorChange } from "./colorChange.js";
import { displayWords } from "./wordTemplate.js";
import { Counter } from "./counter.js";
import { getParam, loadHeader,addToggle, createWords, upperInput, setClick } from "./utils.js";


async function init(){
  //await loadHeader();
  addToggle();
    const solution = new Solution();
    await solution.getSolution();
    displayWords("wordGrid",solution.returnList());
}
init();
upperInput();

// create the counters

let counter1 = new Counter(1);
let counter2 = new Counter(2);

counter1.init(1);
counter2.init(2);

// logic for changing player
async function playerColors(player, element) {
  // Change color of button that was clicked to yellow and the other to green
  element.style.backgroundColor = "#F1D302";
  const otherElement = (player === 1) ? document.getElementById("player2") : document.getElementById("player1");
  otherElement.style.backgroundColor = "#1f8c0a";
  
  const solution = new Solution();
  await solution.getSolution();

  let colorChange;
  if (player === 1) {
    colorChange = new ColorChange(solution.returnSolution().player1Solution, solution.returnList());
  } else {
    colorChange = new ColorChange(solution.returnSolution().player2Solution, solution.returnList());
  }


   colorChange.init();
}

const player1Element = document.getElementById("player1");
const player2Element = document.getElementById("player2");


player1Element.addEventListener("click", function() {
  playerColors(1, player1Element);
});

player2Element.addEventListener("click", function() {
  playerColors(2, player2Element);
});



// logic for showing solutions.
// player1 should see player 2s solution, and vice versa

const show1Element = document.getElementById("show1");
const show2Element = document.getElementById("show2");

show1Element.addEventListener("click", async function() {
  console.log("showing solution for player 1");
  const solution = new Solution();
  await solution.getSolution();
  displayWords("solutionGrid",solution.returnList());

  let colorChange = new ColorChange;
  colorChange.playerChange(document.getElementById('solutionGrid'), solution.returnSolution().player2Solution);
});
show2Element.addEventListener("click", async function() {
  console.log("showing solution for player 1");
  const solution = new Solution();
  await solution.getSolution();
  displayWords("solutionGrid",solution.returnList());

  let colorChange = new ColorChange;
  colorChange.playerChange(document.getElementById('solutionGrid'), solution.returnSolution().player1Solution);
});

const hideElement = document.getElementById("hide");
hideElement.addEventListener("click", async function() {document.getElementById("solutionGrid").innerHTML = ""});



document.getElementById('solution_button').href = `../solution/index.html?code=${getParam("code")}`;

document.getElementById("new_game").addEventListener("click", createWords);

setClick();