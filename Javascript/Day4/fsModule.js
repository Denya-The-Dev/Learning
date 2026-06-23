import fs from "fs/promises";

async function saveFile(fileName) {
  try {
    const data = "User: Hello! \nAI: Hi there!";
    await fs.writeFile(fileName, data);
    console.log("File has been written");
  } catch (error) {
    console.log("Oops, there was an error: ", error.message);
  }
}

async function loadFile(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log("Here are the contents: ", data);
  } catch (error) {
    console.log("Sorry, there was an error: ", error.message);
  }
}

async function main() {
  await saveFile("logs.txt");
  await loadFile("logsy.txt");
}

main();
