import { addToggle, colorHeader, loadHeader } from './utils';
(async () => {
  //await loadHeader();
  addToggle();
  colorHeader();
})();
// Fetch the array of codes from the API
console.log('starting timer');
// Set a timeout for 5 seconds
const timeoutPromise = new Promise((_, reject) => {
  setTimeout(() => {
    const randomGame = Math.floor(Math.random() * 1000);
    window.alert(
      'The Database is taking longer than usual to load! It may take up to 60 seconds if it has not been used in a while'
    );
    console.log('Timeout: The request took too long to complete.');
  }, 15000); // 5 seconds in milliseconds
});

fetch('https://codenamesdb.onrender.com/duet/getAllCodes')
  .then((response) => response.json())
  .then((data) => {
    // Get the container element where the links will be inserted
    const currentGamesContainer = document.getElementById('current_games');

    currentGamesContainer.innerHTML = '';
    // Iterate over the array of codes and create a link for each code
    data.forEach((code) => {
      // Create a new link element
      const link = document.createElement('a');
      link.href = `https://codenamesbyskyler.netlify.app/duet/html/game/index.html?code=${code}`;
      // link.href = `http://localhost:5173/duet/html/game/index.html?code=${code}`;
      link.textContent = code;

      // Append the link to the container
      currentGamesContainer.appendChild(link);
      currentGamesContainer.appendChild(document.createElement('br'));
    });
  })
  .catch((error) => {
    console.error('Error retrieving codes:', error);
  });
