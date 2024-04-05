/*
output:-

  1
 234
56789

*/

let times = 3;
let value = 1;
let output = "";

for (let line = 1; line <= times; line++) {
  for (let space = 1; space <= times - line; space++) {
    output += " ";
  }
  for (let num = 1; num <= line * 2 - 1; num++) {
    output += value;
    value++;
  }
  output += "\n";
}

console.log(output);
