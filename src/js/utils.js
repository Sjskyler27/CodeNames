// this function gets a parameter from the url 
export function getParam(type){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get(type);
    console.log(`parameter: ${type} = ${code}`)
    return code;
}

export function insertCode(code){
    document.getElementById("gameCode").value = code;
}

export function colorHeader(firstPlayer){
  let header = document.getElementById("first_player");
  if(firstPlayer){

    if(firstPlayer == "red"){
      header.style.color = "#C1292E";
    }else{
      header.style.color = "#235789";
    }
  }else{
    const colors = ["#235789","#F1D302","#C1292E"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    header.style.color = randomColor; // Set the text color to the randomly selected color
  }


}

export async function autoClick(){
    console.log("clicking cards");
    await new Promise(resolve => setTimeout(resolve, 500)); // add delay for suspense... and to make it work
    const cards = document.getElementsByClassName('card'); // Get all the card elements
    // Loop through each card element
    for (const card of cards) {
        await new Promise(resolve => setTimeout(resolve, 50)); // add delay for trailing effect
        card.click(); // Trigger a click event on the card
    }
}
// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  // clear local storage
  export function clearLocalStorage(key, data) {
    localStorage.clear();
  }
  
  export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false){
    const htmlStrings = list.map(templateFn);
    if (clear){
      parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
  }
  
  export function renderWithTemplate(template, parentElement, data, callback, position = "afterbegin"){
    if (parentElement) {
      parentElement.insertAdjacentHTML(position, template);
      if (callback) {
        callback(data);
      }
    } else {
      console.error("Parent element is null or undefined.");
    }
  }
  
  async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }

export async function loadHeader(){
    const headerTemplate = await loadTemplate("../partials/header.html");
    const headerElement = document.querySelector("#main_header");
    
    renderWithTemplate(headerTemplate, headerElement);
  }
  export async function addToggle() {
    const colorToggle = document.getElementById('color-toggle');
  
    // Retrieve the saved color mode from localStorage, if available
    const savedColorMode = localStorage.getItem('colorMode');
    const elements = document.querySelectorAll('*');
    
    if (savedColorMode === 'dark-mode') {
      elements.forEach(element => {
        element.classList.toggle('dark-mode');
      });
      colorToggle.checked = true;
    }
  
    // Listen for changes in the color toggle
    colorToggle.addEventListener('change', function() {
      if (colorToggle.checked) {
        elements.forEach(element => {
          element.classList.toggle('dark-mode');
        });
        localStorage.setItem('colorMode', 'dark-mode');
      } else {
        elements.forEach(element => {
          element.classList.toggle('dark-mode');
        });
        localStorage.setItem('colorMode', 'light-mode');
      }
    });
  }
  