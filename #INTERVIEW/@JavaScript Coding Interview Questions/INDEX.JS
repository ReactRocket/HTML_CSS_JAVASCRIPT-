/*


1. Guess the outputs of the following codes:
// Code 1:

function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}
func1();

// Code 2:

function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}
}
func2();

// Code 3:

(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();
Answers:

Code 1 - Outputs 2 and 12. Since, even though let variables are not hoisted, due to the async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.
Code 2 - Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.
Code 3 - Output in the following order:
2
4
3
1 // After two seconds
Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API, and therefore, the complete function executes before the setTimeout function can execute.

2. Guess the outputs of the following code:
// Code 1:

let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]);

// Code 2:

function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}
runFunc();

// Code 3:

let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));
Answers:

Code 1 - Output will be {name: “Akki”}.

Adding objects as properties of another object should be done carefully.

Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,

While setting a property of an object, javascript coerces the parameter into a string.

Therefore, since y is an object, it will be converted to ‘object Object’.

Both x[y] and x[z] are referencing the same property.

Code 2 - Outputs in the following order:

11
Nan
2-22
NaN
Hello78
Code 3 - Output in the following order due to equality coercion:

true
false
3. Guess the output of the following code:
var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 
Answer:
Output is NaN.

random() function has functional scope since x is declared and hoisted in the functional scope.

Rewriting the random function will give a better idea about the output:

function random(){
  var x; // x is hoisted
  x++; // x is not a number since it is not initialized yet
  console.log(x); // Outputs NaN
  x = 21; // Initialization of x
}
4. Guess the outputs of the following code:
// Code 1

  let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower());
  console.log(getPower.apply(hero2));
  


  // Code 2
  
  const a = function(){
    console.log(this);
  
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();
  


  // Code 3
  
  const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  b.f();
Answers:

Code 1 - Output in the following order:

undefined
42
Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:

window.getPower() = getPower();

Code 2 - Outputs in the following order:

global/window object
object "b"
global/window object

Since we are using the arrow function inside func2, this keyword refers to the global object.

Code 3 - Outputs in the following order:

"Vivek"
undefined
"Vivek" 
Only in the IIFE inside the function f, this keyword refers to the global/window object.
 

5. Guess the outputs of the following code:
**Note - Code 2 and Code 3 require you to modify the code, instead of guessing the output.
// Code 1

(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);

// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

function bigFunc(element){
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again

// Code 3

// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

function randomFunc(){
  for(var i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}
randomFunc();
Answers -

Code 1 - Outputs 45.

Even though a is defined in the outer function, due to closure the inner functions have access to it.

Code 2 - This code can be modified by using closures,

function bigFunc(){
  let newArray = new Array(700).fill('♥');
  return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);  
Code 3 - Can be modified in two ways:

Using let keyword:

function randomFunc(){
  for(let i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}
randomFunc(); 
Using closure:

function randomFunc(){
  for(var i = 0; i < 2; i++){
  (function(i){
      setTimeout(()=>console.log(i),1000);
    })(i);
  }
}
randomFunc();
6. Write a function that performs binary search on a sorted array.
function binarySearch(arr,value,startPos,endPos){
  if(startPos > endPos) return -1;

  let middleIndex = Math.floor(startPos+endPos)/2;

  if(arr[middleIndex] === value) return middleIndex;

  elsif(arr[middleIndex] > value){
    return binarySearch(arr,value,startPos,middleIndex-1);
  }
  else{
    return binarySearch(arr,value,middleIndex+1,endPos);
  }
}    
7. Implement a function that returns an updated array with r right rotations on an array of integers a .
Example:

Given the following array: [2,3,4,5,7]
Perform 3 right rotations:
First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

return [4,5,7,2,3]

Answer:

function rotateRight(arr,rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]   
8. Write the code for dynamically inserting new components.
<html> 
<head> 
<title>inserting new components dynamically</title> 
<script type="text/javascript"> 
    function addNode () { var newP = document. createElement("p"); 
    var textNode = document.createTextNode(" This is other node"); 
    newP.appendChild(textNode); document.getElementById("parent1").appendChild(newP); } 
</script> 
</head> 
<body> <p id="parent1">firstP<p> </body> 
</html>
9. Write the code given If two strings are anagrams of one another, then return true.
var firstWord = "Deepak";
var secondWord = "Aman";

isAnagram(wordOne, wordTwo); // true

function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
10. Write the code to find the vowels
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}
11. In JavaScript, how do you turn an Object into an Array []?
let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]
12. What is the output of the following code?
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
Ans. 

1
2
3
4
5
6
7
8
9
10
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined


*/
