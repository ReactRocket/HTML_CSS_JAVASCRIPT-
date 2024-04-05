/*
output:- 

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/

let times = 5;
let output = "";

for (let line = 1; line <= times; line++) {
  for (let num = 1; num <= line; num++) {
    output += line + " ";
  }
  output += "\n";
}

console.log(output);
