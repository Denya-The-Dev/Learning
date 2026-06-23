const arr = [1, 2, 3];
const result = [...arr, 4];
console.log(result);
console.log(arr);

for (let i = 0; i < result.length; i++) {
  console.table(result[i]);
}
