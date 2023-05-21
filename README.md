# CodeNames
This repository is the front end application of my version of Code Names. Code Names is a popular board game in which teams are competing against eachother to guess all of their secret words. The goal of my version is to have the most accessible, easy to use online version of Code Names.

# Front End
https://app.netlify.com/sites/codenamesbyskyler/overview

https://codenamesbyskyler.netlify.app/ you can view the front end here. I will be using vite and ES modules for my front end, when you first clone this repository run npm install. In order to run locally type npm run start in the directory where it was installed. 

# Navigation
There are 5 pages to my front end.
Home: navigation to other portions of the website.
Instructions: teaches how to play the game.
NewGame: creates a new game from a list of words then navigates you to that new game.
Current Games: retrieves a list of the current set up games, this gives a quick way to either join a game or if create game is not working you can fall back on this.
solutions: reveals the solution to the game. 

# JS
Each html has its own respective driver that will call classes and functions from other modules and utilities. utils.js has many functions declared that may need to be called from multiple drivers. 

# Back End
https://dashboard.render.com/web/srv-chiktmrhp8ufsbjqh3k0

https://codenamesdb.onrender.com/doc 
My back end is deployed on render and uses mongo db to store the database you can view the swagger documentation here. There are only two calls that you need to worry about with this backend:
GET ./byID return a json acording to the ID that was provided, this allows users to hop onto games that are already creaeted.
POST ./create this will do two things I struggled to choose wether it would be post or get because we will not be passing it anything, but when called, it will tell the backend to create a new solution, then the backend will return that solution and the corosponding ID. 

# Mistakes/Reminders
when deploying to netlify make sure env variables are set. make sure node version is valid, check vite config file.

make sure that all html files are named index and are in their respective folder. they also need to be invluded in the vite config routes

html files need to have the meta viewport set in order to recieve changes in the mobile.





