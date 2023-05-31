import {Solution} from "./solution.js";
import { ColorChange } from "./colorChange.js";
import { displayWords } from "./wordTemplate.js";
import { autoClick, getParam, loadHeader, addToggle, upperInput, setClick } from "./utils.js";

async function init(){
  await loadHeader();
  
  addToggle();
    const solution = new Solution();
    await solution.getSolution();
    
    displayWords("wordGrid",solution.returnList());
    const colorChange = new ColorChange(solution.returnSolution(), solution.returnList());
    // every once in a while it seems this function gets called before the program is ready
    colorChange.init();
    autoClick();
}
init();
upperInput();
document.getElementById('game_button').href = `../game/index.html?code=${getParam("code")}`;

setClick();