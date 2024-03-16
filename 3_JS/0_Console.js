/*

Topic :- console methos

1) console.log()

-> It is used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.

console.log("Hello World"); // this is used to display text in the  console/terminal

2) console.table()

-> This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.

let uname = "ABC";
let age = "10";
let mobile = "1234567890";
let city = "surat";

console.table({ uname, age, mobile, city }); // this will print the data in table format

3) console.error() 

-> This method is used to log an error message to the console. Useful in testing of code. By default the error message will be highlighted with red color.

console.error('This is a simple error');

4) console.warn()

-> Used to log warning message to the console. By default, the warning message will be highlighted with yellow color.

console.warn('This is a simple warning');

5) console.info()

-> Used to log information message to the console. By default, the information message will be highlighted with skyBlue color.

console.info('This is a simple information');

6) console.clear() 

-> Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in Firefox no message is returned.

console.clear();

7) console.count() 

-> This method is used to count the number that the function hit by this counting method.


for(let i=0;i<5;i++){ 
    console.count(i); 
}

8) console.group() and console.groupEnd()

-> JavaScript group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented. Just like the time() and the timeEnd() they also accepts label, again of same value.


console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('vivi vini vici'); 
console.groupEnd('simple'); 

------------------------------------------------------------------------------------------------------

BONUS TIPS//

(*1) Custom Console Logs:

-> User can add Styling to the console logs in order to make logs Custom . The Syntax for it is to add the CSS styling as a parameter to the logs which will replace %c in the logs as shown in the example below .

const spacing = '10px'; 
const styles =  
      `padding: ${spacing}; background-color: white; color: green; font-style:  
       italic; border: 1px solid black; font-size: 2em;`; 
console.log('%cGeeks for Geeks', styles);


(*2) console.time() and console.timeEnd() 

-> Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the JavaScript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console).


console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); // calling fun(); 
 fun2(); // calling fun2(); 
console.timeEnd('abc');

*/
