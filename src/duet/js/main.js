import { addToggle, colorHeader, loadHeader, upperInput, createWords } from "./utils";
import jsonList from "../json/words.json";

// (async () => {
//   await loadHeader();
//   addToggle();
//   colorHeader();
// })();

document.getElementById("new_game").addEventListener("click", createWords);

upperInput();