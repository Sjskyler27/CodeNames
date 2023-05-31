import { addToggle, colorHeader, loadHeader, upperInput, createWords , loadTemplate, setClick} from "./utils";
import jsonList from "../json/words.json";

(async () => {
  await loadHeader();
  addToggle();
  colorHeader();
  // make a call to the data base to get it loaded sooner.
  console.log(await loadTemplate('https://codenamesdb.onrender.com/getAllCodes'));

})();

// Check if the alert has been shown before
const isAlertShown = localStorage.getItem('alertShown');
// localStorage.setItem('alertShown', false);
if (!isAlertShown) {
  // Show the alert and set the flag in localStorage
  window.alert('The backend for this website is deployed on render for free and can sometimes take up to 60 seconds to load for the first time.');
  localStorage.setItem('alertShown', true);
}


document.getElementById("new_game").addEventListener("click", () => {
  const spinnerDiv = document.createElement('div');
  spinnerDiv.classList.add('spinner');

  document.getElementById("home_nav").appendChild(spinnerDiv);
  createWords();
});


upperInput();

setClick();