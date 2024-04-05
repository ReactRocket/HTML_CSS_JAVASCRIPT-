/*
output:- 

    1
   123
  12345
 1234567
123456789

*/

let times = 5;
let output = "";

for (let line = 1; line <= times; line++) {
  for (let space = 1; space <= times - line; space++) {
    output += " ";
  }
  for (let num = 1; num <= line * 2 - 1; num++) {
    output += num;
  }
  output += "\n";
}

console.log(output);
