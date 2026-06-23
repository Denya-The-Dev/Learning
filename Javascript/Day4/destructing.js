const messages = [
  { role: "user", content: "hello" },
  { role: "assistant", content: "hi there" },
  { role: "user", content: "how are you" },
  { role: "assistant", content: "I am doing well" },
  { role: "user", content: "goodbye" },
];

messages.forEach(({ role, content }) => console.log(`${role}: ${content}`));
