// This function recieves a randomized list of words and returns the html for that list
function gridTemplate(wordList) {
  let template = ''; // Initialize an empty string to store the HTML template
  let usedWords = []; // Initialize an empty array to store the used word list

  
  // Check if there are previously used words stored in local storage
  if (localStorage.getItem('usedWords')) {
    usedWords = JSON.parse(localStorage.getItem('usedWords'));
    // delete useed words after 10 games
    if(usedWords.length>225){
      clearLocalStorage('usedWords');
      usedWords=[];
    }
  }


  // Iterate over each word in the wordList
  for (const word of wordList) {
    // Generate the HTML for each word and append it to the template string
    template += `<div id="${word}" class="clickable-element card"><p>${word}</p></div>`;

    // Check if the word is already in the used word list
    if (!usedWords.includes(word)) {
      // Add the word to the used word list
      usedWords.push(word);
    }
  }


  // Save the updated used word list to local storage
  localStorage.setItem('usedWords', JSON.stringify(usedWords));

  // clear if needed
  // clearLocalStorage('usedWords');
  
  // Return the final template
  return template;
}

export function displayWords(htmlLocation, wordList) {
    console.log("Displaying words...");
    const template = gridTemplate(wordList);
    document.getElementById(htmlLocation).innerHTML = template;
}

