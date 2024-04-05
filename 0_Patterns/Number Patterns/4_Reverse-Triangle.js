/*
output:-

12345
1234
123
12
1

*/

let times = 5;
let output = "";

for (let line = times; line >= 1; line--) {
  for (let num = 1; num <= line; num++) {
    output += num + " ";
  }
  output += "\n";
}
console.log(output);
