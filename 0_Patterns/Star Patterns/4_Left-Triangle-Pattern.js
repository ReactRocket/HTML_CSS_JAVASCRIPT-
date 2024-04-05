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
  for (let num = 1; num <= line; num++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
