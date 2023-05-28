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
    change(id,element){
        //im sure there is a quiker way but this is good for now
        // check if the id passed matches a word in a given list and return its color.
        //make an unclick feature
        if(element.style.backgroundColor != '#dbd4d3'){
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
            if(this.solution.Green.indexOf(id)>=0){
                console.log("changing to Green");
                element.style.backgroundColor = '#1f8c0a';
                element.style.color = 'white';
            }
        }
        else{
            console.log("changing to white");
                element.style.backgroundColor = '#dbd4d3';
                element.style.color = 'black';
        }
    }

    // initialize colorChange event, wait for a card to be clicked
    async init() {
        await new Promise(resolve => setTimeout(resolve, 500)); // Delay for .5 second to really ensure that everything is ready
        console.log(this.solution);
        this.solution.Green.forEach(id => {
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
    //  not neccessary, pass dif solution
    //   async initPlayer1() {
    //     await new Promise(resolve => setTimeout(resolve, 500)); // Delay for .5 second to really ensure that everything is ready
        
    //     this.solution.player1Solution.Green.forEach(id => {
    //       let element = document.getElementById(id);
    //       element.addEventListener('click', () => this.change(id, element)); 
    //     });
    //     this.solution.player1Solution.Yellow.forEach(id => {
    //       let element = document.getElementById(id);
    //       element.addEventListener('click', () => this.change(id, element)); 
    //     });
    //     this.solution.player1Solution.Black.forEach(id => {
    //       let element = document.getElementById(id);
    //       element.addEventListener('click', () => this.change(id, element)); 
    //     });
    //   }
    //   async initPlayer2() {
    //     await new Promise(resolve => setTimeout(resolve, 500)); // Delay for .5 second to really ensure that everything is ready
        
    //     this.solution.player2Solution.Green.forEach(id => {
    //       let element = document.getElementById(id);
    //       element.addEventListener('click', () => this.change(id, element)); 
    //     });
    //     this.solution.player2Solution.Yellow.forEach(id => {
    //       let element = document.getElementById(id);
    //       element.addEventListener('click', () => this.change(id, element)); 
    //     });
    //     this.solution.player2Solution.Black.forEach(id => {
    //       let element = document.getElementById(id);
    //       element.addEventListener('click', () => this.change(id, element)); 
    //     });
    //   }
    }