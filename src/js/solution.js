//This module gets the solution from the back end, it is ablt to return the entire solution json, and the list of words.
import Backup from "../json/backup.json";
import { insertCode, getParam } from "./utils";
export class Solution{
    constructor(){
        this.solution;
        this.wordList =[];
    }

    //Solution is a json object that contains the code, first player, and word values
    async getSolution() {
        console.log("Getting solution...");
        const code = getParam("code");
        try{
            const response = await fetch(`https://codenamesdb.onrender.com/${code}`);
            insertCode(code);
            // const response = await fetch(`http://localhost:8080/${2468}`);
            const data = await convertToJson(response);
            this.solution = data;
            this.wordList = this.solution.words;  
        }catch(e){
            console.log('no good ' +e);
            const randomType = Math.floor(Math.random() * Backup.length);
            console.log(randomType);
            this.solution = Backup[randomType]; //temporary will be getting from api
            //console.log(this.solution);
            // temp wordlist
            this.wordList = this.solution.words;
            window.alert("The database does not seem to be working! But don't worry you can play a few rounds without it.");
            //console.log(this.wordList);
        }

    }
    
    // going to move this to the back end
    randomizeWords() {
        console.log("Randomizing words...");

        // console.log(this.solution);
        const { Player1, Player2, Yellow, Black } = this.solution;
    
        const lists = [Player1, Player2, Yellow, Black];
            
        // Generate a random order for selecting the lists
        while (lists.length > 0) {
          const randomType = Math.floor(Math.random() * lists.length);
          console.log(lists[randomType][0]);
        //   let word = toString(lists[randomType][0]);
        //   console.log(word);
          this.wordList.push(lists[randomType][0]); // getting an object instead of a string
          this.wordList.splice(0,1);
        //   if (this.wordList.length=0){
              lists.splice(randomType, 1);
        //   }
        }
    }
    
    returnSolution(){
        return this.solution;
    }
    returnList(){
        // console.log("sending list");
        // console.log(this.wordList);

        return this.wordList;
    }
    returnFirstPlayer(){
        const {firstPlayer} = this.solution;
        // console.log(firstPlayer);
        return firstPlayer;
    }
    returnBlack(){
        const {Black} = this.solution;
        // console.log(Black);
        return Black;
    }
    returnYellow(){
        const {Yellow} = this.solution;
        // console.log(Yellow);
        return Yellow;
    }
    returnPlayer1(){
        const {Player1} = this.solution;
        // console.log(Player1);
        return Player1;
    }
    returnPlayer2(){
        const {Player2} = this.solution;
        // console.log(Player2);
        return Player2;
    }
}

function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }