/*
output :-

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 

*/

let n = 5;
let output = "";

for (let line = 1; line <= n; line++) {
  for (let num = 1; num <= line; num++) {
    output += num + " ";
  }
  output += "\n";
}

console.log(output);
