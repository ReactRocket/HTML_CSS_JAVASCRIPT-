/*
output:- 

1
2 3
4 5 6
7 8 9 10

*/

let times = 4;
let value = 1;
let output = "";

for (let line = 1; line <= times; line++) {
  for (let num = 1; num <= line; num++) {
    output += value + " ";
    value++;
  }
  output += "\n";
}

console.log(output);
