import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = [];
let exit = false;

while (!exit) {
  const userInput = await rl.question(
    "Type in your message to the AI (/bye to exit): ",
  );
  if (userInput.toLowerCase().trim() === "/bye") {
    console.log("Thank you for chatting!");
    rl.close();
    exit = true;
  } else {
    messages.push({ role: "user", content: userInput });

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma4:e2b",
        messages: messages,
        stream: false,
      }),
    });

    const received = await response.json();
    messages.push({
      role: received.message.role,
      content: received.message.content,
    });
    console.log(received.message.content);
  }
}
