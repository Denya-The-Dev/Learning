// Importing packages here
import fs from "node:fs/promises";
import fsAlt from "fs";
import path from "node:path";

//BACKEND STUFF
import {
  createDeck,
  addToDeck,
  makeDecksDirectory,
  deleteDeck,
  deleteQuestion,
} from "./fileModFunctions.js";

//CLI FRONTEND STUFF
import {
  showDecks,
  greetInit,
  menuDialog,
  deckJsonFromIndex, //returns __FILENAME
  getTemporaryQuestionsArray,
} from "./userIntFunctions.js";
import readline from "readline/promises";
import { exit, stdin as input, stdout as output } from "node:process";

// Tool setup

const rl = readline.createInterface({ input, output });
let mainExit = false;

// Main loops
greetInit();
while (!mainExit) {
  // VARIABLES FOR THE LOOP
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let indexx = 0;
  //END OF VARIABLES
  menuDialog();
  const action = Number(await rl.question("Your choice: "));
  if (action === 2) {
    // PRACTICE
    showDecks();
    const chosenDeckIndex = Number(
      await rl.question("Choose your deck (Number): \n "),
    );
    const filename = await deckJsonFromIndex(chosenDeckIndex);
    const questions = await getTemporaryQuestionsArray(filename);
    console.log(questions);
    //THE FOR LOOP TO LOOP THROUGH QUESTIONS
    for (const { question, explanation, answer } of questions) {
      console.log(`Question ${indexx + 1}: ${question}`);
      const answerResponse = await rl.question(
        "Do you know the answer? (Y/N): ",
      );
      if (answerResponse.trim().toUpperCase() === answer) {
        console.log(`Correct response. Explanation: \n ${explanation}`);
        correctAnswers++;
      } else {
        console.log(`Incorrect response. Explanation: ${explanation}`);
        wrongAnswers++;
      }
      indexx++;
    }
    const tempoStats = {
      CorrectAnswers: correctAnswers,
      WrongAnswers: wrongAnswers,
      TotalQuestions: questions.length,
      CorrectPercentage: `${(correctAnswers / questions.length) * 100}%`,
    };
    console.table(tempoStats);

    //OPENING FILE WITH THE NAME THAT THE FILENAME RETURNED
  } else if (action === 1) {
    // Edit
  } else if (action === 3) {
    // Exit
    rl.close();
    console.log("Thank you for using my app!");
    mainExit = true;
  }

  //WHILE LOOP BRACE ->
}
