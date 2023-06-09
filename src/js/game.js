import {Solution} from "./solution.js";
import { ColorChange } from "./colorChange.js";
import { displayWords } from "./wordTemplate.js";
import { getParam, loadHeader,addToggle, createWords, upperInput, setClick } from "./utils.js";


async function init(){
  await loadHeader();
  addToggle();
    const solution = new Solution();
    await solution.getSolution();
    
    displayWords("wordGrid",solution.returnList());
    const colorChange = new ColorChange(solution.returnSolution(), solution.returnList());
    // every once in a while it seems this function gets called before the program is ready
    colorChange.init();
}
init();
upperInput();

document.getElementById('solution_button').href = `../solution/index.html?code=${getParam("code")}`;

document.getElementById("new_game").addEventListener("click", createWords);

setClick();