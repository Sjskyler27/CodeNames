// This function recieves a randomized list of words and returns the html for that list
function gridTemplate(wordList){
    let template = ''; // Initialize an empty string to store the HTML template
  // Iterate over each word in the wordList
    for (const word of wordList) {
    // Generate the HTML for each word and append it to the template string
    template += `<div id = "${word}" class = "clickable-element card"  class = "clickable-element" ><p>${word}</p></div>`;
  }

    return template; // Return the completed HTML template
}

export function displayWords(htmlLocation, wordList) {
    console.log("Displaying words...");
    const template = gridTemplate(wordList);
    document.getElementById(htmlLocation).innerHTML = template;
}

