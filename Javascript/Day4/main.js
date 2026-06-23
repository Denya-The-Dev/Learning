import { formatMessage, MODEL } from "./chatUtils.js";

const myMessage = formatMessage("user", "hello there!");

const { role, content } = myMessage;

console.log(`${role}: ${content}`);
console.log("Using model:", MODEL);
