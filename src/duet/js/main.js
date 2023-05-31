import { addToggle, colorHeader, loadHeader, upperInput, createWords, setClick} from "./utils";
import jsonList from "../json/words.json";

(async () => {
  // await loadHeader();
  addToggle();
  colorHeader();
})();

document.getElementById("new_game").addEventListener("click", () => {
  const spinnerDiv = document.createElement('div');
  spinnerDiv.classList.add('spinner');

  document.getElementById("home_nav").appendChild(spinnerDiv);
  createWords();
});

upperInput();

setClick();