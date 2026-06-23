//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*

try {
  //console.log(numbers.filter((num) => num % 2 === 0));
  //console.log(numbers.map((num) => num * 2));
  console.log(
    numbers.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0),
  );
} catch (error) {
  console.log(error.message);
}
*/
const messages = [
  { role: "user", content: "hello" },
  { role: "assistant", content: "hi there" },
  { role: "user", content: "how are you" },
  { role: "assistant", content: "I am doing well" },
  { role: "user", content: "goodbye" },
];

const userMessages = messages.filter((msg) => msg.role === "user");

console.log(userMessages);

const onlyContent = messages.map((msg) => msg.content);

console.log(onlyContent);

const userNum = messages.reduce(
  (accumulator, current) =>
    current.role === "user" ? accumulator + 1 : accumulator,
  0,
);

console.log(userNum);
