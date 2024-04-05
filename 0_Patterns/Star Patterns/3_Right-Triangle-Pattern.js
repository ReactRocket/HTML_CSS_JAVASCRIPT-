/*
output:-

    *
   **
  ***
 ****
*****

*/

let times = 5;
let output = "";

for (let line = 1; line <= times; line++) {
  for (let space = 1; space <= times - line; space++) {
    output += " ";
  }
  for (let num = 1; num <= line; num++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
