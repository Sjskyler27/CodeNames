# CodeNames
This repository is the front end application of my version of Code Names. Code Names is a popular board game in which teams are competing against eachother to guess all of their secret words. The goal of my version is to have the most accessible, easy to use online version of Code Names.

# Front End
I will be using vite and ES modules for my front end, when you first clone this repository run npm install. In order to run locally type npm run start

There are only two pages to my front end, with one css file for both. there are multiple js files formated so that each page has a driver .js file that will call multiple module .mjs files. 
# Back End
My back end is deployed on render and uses mongo db to store the database. There are only two calls that you need to worry about with this backend:
GET ./byID return a json acording to the ID that was provided, this allows users to hop onto games that are already creaeted.
POST ./create this will do two things I struggled to choose wether it would be post or get because we will not be passing it anything, but when called, it will tell the backend to create a new solution, then the backend will return that solution and the corosponding ID. 