import {Solution} from "./solution.js";
import { ColorChange } from "./colorChange.js";
import { displayWords } from "./wordTemplate.js";
import { getParam, loadHeader,addToggle, createWords, upperInput } from "./utils.js";


async function init(){
  await loadHeader();
  addToggle();
    const solution = new Solution();
    await solution.getSolution();
    displayWords("wordGrid",solution.returnList());
}
init();
upperInput();


// logic for changing player
async function playerColors(player, element) {
  const solution = new Solution();
  await solution.getSolution();

  let colorChange;
  if (player === 1) {
    colorChange = new ColorChange(solution.returnSolution().player1Solution, solution.returnList());
  } else {
    colorChange = new ColorChange(solution.returnSolution().player2Solution, solution.returnList());
  }

   // Change color of button that was clicked to yellow and the other to green
   element.style.backgroundColor = "#F1D302";
   const otherElement = (player === 1) ? document.getElementById("player2") : document.getElementById("player1");
   otherElement.style.backgroundColor = "#1f8c0a";

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
// playe r1 should see player 2s solution, and vice versa

const show1Element = document.getElementById("show1");
const show2Element = document.getElementById("show2");

show1Element.addEventListener("click", async function() {
  console.log("showing solution for player 1");
  const solution = new Solution();
  await solution.getSolution();
  displayWords("solutionGrid",solution.returnList());

  // need to make button clicks for just solution cards
});
show2Element.addEventListener("click", async function() {
  console.log("showing solution for player 1");
  const solution = new Solution();
  await solution.getSolution();
  displayWords("solutionGrid",solution.returnList());
});

const hideElement = document.getElementById("hide");
hideElement.addEventListener("click", async function() {document.getElementById("solutionGrid").innerHTML = ""});

document.getElementById('solution_button').href = `../solution/index.html?code=${getParam("code")}`;

document.getElementById("new_game").addEventListener("click", createWords);
