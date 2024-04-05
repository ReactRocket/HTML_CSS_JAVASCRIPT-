/*
output:-

*****
*   *
*   *
*   *
*****

*/

let times = 5;
let output = "";

for (let line = 1; line <= times; line++) {
  for (let num = 1; num <= times; num++) {
    if (line === 1 || line === times || num === 1 || num === times) {
      output += "*";
    } else {
      output += " ";
    }
  }
  output += "\n";
}

console.log(output);
