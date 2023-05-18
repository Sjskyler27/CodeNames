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