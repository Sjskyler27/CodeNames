import {Solution} from "./solution.js";
import { ColorChange } from "./colorChange.js";
import { displayWords } from "./wordTemplate.js";
import { autoClick, getParam } from "./utils.js";

async function init(){
    const solution = new Solution();
    await solution.getSolution();
    
    displayWords("wordGrid",solution.returnList());
    const colorChange = new ColorChange(solution.returnSolution(), solution.returnList());
    // every once in a while it seems this function gets called before the program is ready
    colorChange.init();
    autoClick();
}

init();

const colorToggle = document.getElementById('color-toggle');
colorToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('game_button').href = `../game/index.html?code=${getParam("code")}`;

