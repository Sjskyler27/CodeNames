import { addToggle, colorHeader, loadHeader, createWords } from "./utils";
(async () => {
  await loadHeader();
  addToggle();
  colorHeader();
})();


document.getElementById("new_game").addEventListener("click", createWords);


