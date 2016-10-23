/**
 * @author Kircher, Everett (Everettkircher@icloud.com)
 * @version 0.0.1
 * @summary hello world // Created 09.15.16
 * @todo
 */


"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let computerInput, newMovieRating, autoRating;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setNewMovieRating();
    setContinueResponse();
    processMovieRating();
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
            if (continueResponse !== 0 && continueResponse !== 1) {
                console.log(`${continueResponse} is an incorrect value please try again`);
                continueResponse = 1;
                return setContinueResponse();
            }
         else {
        } continueResponse = 1;
       }
   }
}

function setNewMovieRating() {
    const MAX_RATING = 5,
          MIN_RATING = 0;
    newMovieRating = Number(PROMPT.question("\nplease enter movie rating for back to the future:"));
    if (newMovieRating > MAX_RATING || newMovieRating < MIN_RATING || isNaN(newMovieRating)) {
        console.log(`${newMovieRating} is an incorrect value try again`);
        newMovieRating = 1;
        return setNewMovieRating();
     } else {
        autoRating = 1
    }
}

function processMovieRating() {
    for(let timesRated = 0; timesRated < 5; timesRated++){
        computerInput = Math.floor((Math.random() * 5) + 1);
    }
    newMovieRating = computerInput + computerInput + computerInput + computerInput + computerInput / 5;
    console.log(`\nThe total score for back to the future is: ${newMovieRating}`)


}

function printGoodbye() {
    console.log(`\tGoodbye.`);
}