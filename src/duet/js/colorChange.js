// the color change class requires the list of words to be changed, as well as the solution.
// :root {
//     --red: #C1292E;
//     --blue: #235789;
//     --yellow: #F1D302;
//     --white: #FDFFFC;
//     --black: #161925;
//     --card-white: #dbd4d3;
//   }
export class ColorChange {
  constructor(solution, list) {
    this.solution = solution;
    this.list = list;
    // console.log(solution);
  }
  change(id, element) {
    //im sure there is a quiker way but this is good for now
    // check if the id passed matches a word in a given list and return its color.
    //make an unclick feature
    if (element.style.backgroundColor != '#dbd4d3') {
      if (this.solution.Black.indexOf(id) >= 0) {
        console.log('changing to black');
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
      }
      if (this.solution.Yellow.indexOf(id) >= 0) {
        console.log('changing to Yellow');
        element.style.backgroundColor = '#F1D302';
        element.style.color = 'black';
      }
      if (this.solution.Green.indexOf(id) >= 0) {
        console.log('changing to Green');
        element.style.backgroundColor = '#1f8c0a';
        element.style.color = 'white';
      }
    } else {
      console.log('changing to white');
      element.style.backgroundColor = '#dbd4d3';
      element.style.color = 'black';
    }
  }

  // recieve a div and iterate through the items in that div. change the color of the item based on the word inside the element.
  playerChange(div, player) {
    const elements = div.getElementsByTagName('div');

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const id = element.getElementsByTagName('p')[0].innerHTML;
      console.log(id);
      console.log(player);

      if (player.Black.indexOf(id) >= 0) {
        console.log('changing to black');
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
      } else if (player.Yellow.indexOf(id) >= 0) {
        console.log('changing to Yellow');
        element.style.backgroundColor = '#F1D302';
        element.style.color = 'black';
      } else if (player.Green.indexOf(id) >= 0) {
        console.log('changing to Green');
        element.style.backgroundColor = '#1f8c0a';
        element.style.color = 'white';
      }
    }
  }

  // initialize colorChange event, wait for a card to be clicked
  async init() {
    await new Promise((resolve) => setTimeout(resolve, 10)); // Delay for .5 second to really ensure that everything is ready
    console.log(this.solution);
    this.solution.Green.forEach((id) => {
      let element = document.getElementById(id);
      element.addEventListener('click', () => this.change(id, element));
    });
    this.solution.Yellow.forEach((id) => {
      let element = document.getElementById(id);
      element.addEventListener('click', () => this.change(id, element));
    });
    this.solution.Black.forEach((id) => {
      let element = document.getElementById(id);
      element.addEventListener('click', () => this.change(id, element));
    });
  }
}
