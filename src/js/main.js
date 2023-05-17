import {Solution} from "./solution.js";
import { ColorChange } from "./colorChange.js";
import { displayWords } from "./wordTemplate.js";

const solution = new Solution("wordGrid");

solution.getSolution();
displayWords("wordGrid",solution.returnList());

const colorChange = new ColorChange(solution.returnSolution(), solution.returnList());
colorChange.init();

//  console.log(solution.returnList());

