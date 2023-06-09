// the color change class requires the list of words to be changed, as well as the solution.
// :root {
//     --red: #C1292E;
//     --blue: #235789;
//     --yellow: #F1D302;
//     --white: #FDFFFC;
//     --black: #161925;
//     --card-white: #dbd4d3;
//   }
export class ColorChange{
    constructor(solution, list){
        this.solution = solution
        this.list = list;
        // console.log(solution);
    }
    change(id, element){
        //im sure there is a quiker way but this is good for now
        // check if the id passed matches a word in a given list and return its color.
        if(this.solution.Black.indexOf(id)>=0){
            console.log("changing to black");
            element.style.backgroundColor = 'black';
            element.style.color = 'white';
        }
        if(this.solution.Yellow.indexOf(id)>=0){
            console.log("changing to Yellow");
            element.style.backgroundColor = '#F1D302';
            element.style.color = 'black';
        }
        if(this.solution.Player1.indexOf(id)>=0){
            // get the first player
            if(this.solution.firstPlayer == "red"){
                console.log("changing to red");
                element.style.backgroundColor = '#C1292E';
                element.style.color = 'white';
            } else{
                console.log("changing to blue");
                element.style.backgroundColor = '#235789';
                element.style.color = 'white';
            }
        }
        if(this.solution.Player2.indexOf(id)>=0){
            if(this.solution.firstPlayer == "blue"){
                console.log("changing to red");
                element.style.backgroundColor = '#C1292E';
                element.style.color = 'white';
            } else{
                console.log("changing to blue");
                element.style.backgroundColor = '#235789';
                element.style.color = 'white';
            }
        }
    }

    // initialize colorChange event, wait for a card to be clicked
    async init() {
        await new Promise(resolve => setTimeout(resolve, 500)); // Delay for .5 second to really ensure that everything is ready
      
        this.solution.Player1.forEach(id => {
          let element = document.getElementById(id);
          element.addEventListener('click', () => this.change(id, element)); 
        });
        this.solution.Player2.forEach(id => {
          let element = document.getElementById(id);
          element.addEventListener('click', () => this.change(id, element)); 
        });
        this.solution.Yellow.forEach(id => {
          let element = document.getElementById(id);
          element.addEventListener('click', () => this.change(id, element)); 
        });
        this.solution.Black.forEach(id => {
          let element = document.getElementById(id);
          element.addEventListener('click', () => this.change(id, element)); 
        });
      }
    }