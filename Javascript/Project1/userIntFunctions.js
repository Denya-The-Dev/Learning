import fs from "node:fs/promises";
import fsAlt from "fs";
import path from "node:path";

export async function showDecks() {
  const pathToFolder = "./Decks/";

  try {
    let fileNames = await fs.readdir(pathToFolder);

    if (fileNames.length >= 1) {
      fileNames.forEach((file, index) => {
        const fileNameee = path.parse(file).name;
        console.log(`${index}: ${fileNameee}`);
      });
    } else {
      console.log("Unable to find Decks directory");
    }
  } catch (error) {
    console.log("We ran into an issue. The directory is not correct. Error:");
    console.log(error.message);
  }
}

export async function deckJsonFromIndex(index) {
  const pathToFolder = "./Decks/";

  if (index === "undefined") {
    return [];
  }

  try {
    let fileNames = await fs.readdir(pathToFolder);

    const numericIndex = Number(index);
    //console.log(fileNames);
    return fileNames[numericIndex];
  } catch (error) {
    console.log("There has been an error: " + error.message);
    return null;
  }
}

export async function getTemporaryQuestionsArray(filename) {
  const dataOriginal = await fs.readFile(`./Decks/${filename}`, "utf8");

  try {
    const dataOriginalParsed = await JSON.parse(dataOriginal);
    return [...dataOriginalParsed];
    // console.table(dataTemporary);
  } catch (error) {
    console.log("There was an error: " + error.message);
  }
}

export async function greetInit() {
  console.log(`Welcome to the flashcards backend! \n `);
}

export async function menuDialog() {
  console.log(
    `Please select the function you want to do: \n (1) Edit \n (2) Practice \n (3) Exit`,
  );
}

export async function startPractice() {}
