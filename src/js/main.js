import { addToggle, colorHeader, loadHeader } from "./utils";

(async () => {
  await loadHeader();
  addToggle();
  colorHeader();
})();

document.getElementById("new_game").addEventListener("click", createWords);

async function createWords() {
  // Get word list data
  const wordListData = await fetch('json/words.json');
  const wordList = await wordListData.json();
  console.log("got words");

  // Set up POST request data
  const postData = {
    type: "Base",
    wordList: wordList.wordList  // wordList is an array in JSON
  };

  try {
    const response = await fetch('https://codenamesdb.onrender.com/createFromWords', {
      method: 'POST',  // specify the request method
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(postData)  // convert data to a JSON string
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();

      // 'data' is the JSON response from the server
      console.log(data);
      // Redirect to /game.html with the code as a parameter
      window.location.href = `/game/index.html?code=${data.code}`;
    }
  } catch (error) {
    console.log('Fetch failed:', error);
  }
}

