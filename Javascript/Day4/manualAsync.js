import fs from "fs/promises";

const data = "User: Hello! \nAI: Hi there!";

fs.writeFile("logs.txt", data)
  .then(() => {
    console.log("File has been written with successful manual async");

    return fs.readFile("logs.txt", "utf-8");
  })
  .then((fileData) => {
    console.log("Here is the data", fileData);
  })
  .catch((error) => {
    console.log("There has been an error", error.message);
  });
