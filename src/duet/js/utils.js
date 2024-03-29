import jsonList from '../json/words.json';

// this function gets a parameter from the url
export function getParam(type) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get(type);
  console.log(`parameter: ${type} = ${code}`);
  return code;
}

export function insertCode(code) {
  document.getElementById('gameCode').value = code;
}

export function colorHeader(firstPlayer) {
  let header = document.getElementById('first_player');
  if (firstPlayer) {
    if (firstPlayer == 'red') {
      header.style.color = '#1f8c0a';
    } else {
      header.style.color = '#F1D302';
    }
  } else {
    const colors = ['#235789', '#F1D302', '#C1292E'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    header.style.color = randomColor; // Set the text color to the randomly selected color
  }
}

export async function autoClick() {
  console.log('clicking cards');
  await new Promise((resolve) => setTimeout(resolve, 500)); // add delay for suspense... and to make it work
  const cards = document.getElementsByClassName('card'); // Get all the card elements
  // Loop through each card element
  for (const card of cards) {
    await new Promise((resolve) => setTimeout(resolve, 50)); // add delay for trailing effect
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
export function clearLocalStorage(category) {
  const storedData = JSON.parse(localStorage.getItem(category));

  if (storedData) {
    localStorage.removeItem(category);
  }
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = 'afterbegin',
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback,
  position = 'afterbegin'
) {
  if (parentElement) {
    parentElement.insertAdjacentHTML(position, template);
    if (callback) {
      callback(data);
    }
  } else {
    console.error('Parent element is null or undefined.');
  }
}

async function loadTemplate(path) {
  try {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  } catch (e) {
    console.log('failed to load header');
  }
}

export async function loadHeader() {
  const headerTemplate = await loadTemplate('/duet/html/header/index.html');
  const headerElement = document.querySelector('#main_header');

  renderWithTemplate(headerTemplate, headerElement);
}

export async function addToggle() {
  const colorToggle = document.getElementById('color-toggle');

  // Retrieve the saved color mode from localStorage, if available
  const savedColorMode = localStorage.getItem('colorMode');
  const elements = document.querySelectorAll('*');

  if (savedColorMode === 'dark-mode') {
    elements.forEach((element) => {
      element.classList.toggle('dark-mode');
    });
    colorToggle.checked = true;
  }

  // Listen for changes in the color toggle
  colorToggle.addEventListener('change', function () {
    if (colorToggle.checked) {
      elements.forEach((element) => {
        element.classList.toggle('dark-mode');
      });
      localStorage.setItem('colorMode', 'dark-mode');
    } else {
      elements.forEach((element) => {
        element.classList.toggle('dark-mode');
      });
      localStorage.setItem('colorMode', 'light-mode');
    }
  });
}

export function setClick() {
  const clickableElements = document.querySelectorAll('button, a, .card');

  clickableElements.forEach((element) => {
    element.classList.add('clickable-element');
    element.addEventListener('click', (event) => {
      event.target.classList.add('clicked');
      setTimeout(() => {
        event.target.classList.remove('clicked');
      }, 200);
    });
  });
}

export async function createWords() {
  let usedWords = getLocalStorage('usedWords') || [];
  // Set up POST request data
  const postData = {
    type: 'Base',
    wordList: jsonList.wordList.filter((word) => !usedWords.includes(word)),
  };

  try {
    console.log('starting timer');
    // Set a timeout for 5 seconds
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        const randomGame = Math.floor(Math.random() * 1000);
        window.location.href = `/duet/html/game/index.html?code=${randomGame}`;
        console.log('Timeout: The request took too long to complete.');
        reject(new Error('Timeout: The request took too long to complete.'));
      }, 4000); // 5 seconds in milliseconds
    });

    const response = await fetch(
      'https://codenamesdb.onrender.com/duet/createFromWords',
      {
        method: 'POST', // specify the request method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData), // convert data to a JSON string
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();

      // 'data' is the JSON response from the server
      console.log(data);
      // Redirect to /game.html with the code as a parameter
      window.location.href = `/duet/html/game/index.html?code=${data.code}`;
    }
  } catch (error) {
    console.log('Fetch failed:', error);
    const randomGame = Math.floor(Math.random() * 1000);
    window.location.href = `/duet/html/game/index.html?code=${randomGame}`;
  }
}
export async function upperInput() {
  const textInput = document.querySelector('.navWrapper input[type="text"]');

  textInput.addEventListener('input', function (event) {
    this.value = this.value.toUpperCase();
  });
}
