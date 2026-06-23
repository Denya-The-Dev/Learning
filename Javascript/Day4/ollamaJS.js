import ollama from "ollama";
import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = [];
let exit = false;
const model = "gemma4:e2b";

while (!exit) {
  const userInput = await rl.question(
    "Enter a message to the AI model or /bye to exit: ",
  );
  if (userInput.toLowerCase().trim() === "/bye") {
    rl.close();
    console.log("Thanks for chatting!");
    exit = true;
  } else {
    try {
      const messagesTEMP = [...messages, { role: "user", content: userInput }];

      const response = await ollama.chat({
        model: model,
        messages: messagesTEMP,
      });

      const { role: from, content: message } = response.message;
      console.log(`${from}: ${message}`);

      messages.push({
        role: "user",
        content: userInput,
      });
      messages.push({
        role: from,
        content: message,
      });

      console.log();
    } catch (error) {
      console.log(error.message);
    }
  }
}
