//FILEMODFUNCTIONS.JS

import fs from "node:fs/promises";
import fsAlt from "fs";

// BELOW ARE THE FILE CREATION // APPEND // DELETE AREAS

export async function makeDecksDirectory() {
  const pathToFolder = "./Decks";

  if (fsAlt.existsSync(pathToFolder)) {
    // check whether the path to the Decks folder exists
    console.log("Path exists, nothing to do");
  } else {
    console.warn("Path doesn't exist. Creating now");
    await fs.mkdir(pathToFolder);
    console.log("Path now exists. Continuing");
  }
}

export async function createDeck(deckName) {
  try {
    if (fsAlt.existsSync(`./Decks/${deckName}.json`)) {
      console.warn("This Deck Already Exists");
    } else {
      const questions = [];
      await fs.writeFile(
        `./Decks/${deckName}.json`,
        JSON.stringify(questions, null, 2),
      );
      console.log("Deck has been created.");
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function addToDeck(deckName, questionS, answerS, explanationS) {
  const filePath = `./Decks/${deckName}`;

  if (fsAlt.existsSync(filePath)) {
    try {
      const fileData = await fs.readFile(filePath, "utf-8");

      const deckJson = JSON.parse(fileData);

      const newQuestion = {
        question: questionS,
        explanation: explanationS,
        answer: answerS,
      };

      deckJson.push(newQuestion);

      await fs.writeFile(filePath, JSON.stringify(deckJson, null, 2));
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.warn("Please check the deck name. Content not created");
  }
}

export async function deleteDeck(deckName) {
  const filePath = `./Decks/${deckName}`;

  if (fsAlt.existsSync(filePath)) {
    try {
      await fs.unlink(filePath);
      console.log(`File ${deckName} has been deleted`);
    } catch (error) {
      console.warn(error.message);
    }
  } else {
    console.log(
      "Confirm that you have specified the right index and the deckName. \n Try again.",
    );
  }
}

export async function deleteQuestion(deckName, index) {
  const filePath = `./Decks/${deckName}`;

  if (fsAlt.existsSync(filePath)) {
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      const data = JSON.parse(fileData);
      const indexToRemove = index;

      data.splice(indexToRemove, 1);
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));

      console.log(`Index ${index} was removed`);
    } catch (error) {
      console.warn(error.message);
    }
  } else {
    console.log(
      "Please check that you have selected right index and deck name",
    );
  }
}
