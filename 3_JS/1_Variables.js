
// Topic:-  {let ,const , var , without using any keyword}

// ----------------------------------------------------------------

// 1) var

// -> Only Declair variables without any value are allowed in 'var' keyword.
// -> Redeclair
// -> GlobalScop
// -> Support [Hoisting (declair the variable to top of the script & use the variable before declairing it.)]
// -> Mutable (can change value)

// Example:-
// var x ; // only declarations are allowed
// var x = 10;
// var x = 20; //Redeclair & Mutable
// console.log(y); // Hoisting (value: undefined)
// var y = 30;
// console.log(x);

// ----------------------------------------------------------------

// 2) let

// -> Only Declair variables without any value are allowed in 'let' keyword.
// -> Can't Redeclair
// -> Blockscope {...}
// -> Not Support [Hoisting -> (declair the variable to top of the script & use the variable before declairing it.)]
// -> Mutable (can change value)

// Example:-
// let x ; // only declarations are allowed
// let x = 20; //Can't Redeclair
// x = 15; // Mutable
// console.log(y); // Hoisting (ReferenceError: Cannot access 'y' before initialization)
// let y = 30;
// console.log(x);

// ----------------------------------------------------------------

// 3) const

// -> Used for constant values like pi = 3.14
// -> Only Declair variables without any value are not allowed in 'const' keyword.
// -> Can't Redeclair
// -> Blockscope {...}
// -> Not Support [Hoisting -> (declair the variable to top of the script & use the variable before declairing it.)]
// -> Unmutable (can;t change value)

// Example:-
// const x ; // only declarations are not allowed
// const x = 10;
// const x = 20; //Can't Redeclair
// x = 15; // Unmutable (Can't change the value )
// console.log(y); // Hoisting (ReferenceError: Cannot access 'y' before initialization)
// const y = 30;
// console.log(x);

// ----------------------------------------------------------------

// 4) without using any keyword

// -> declair without using any keyword
// -> Redeclair
// -> globlescope
// -> Support [Hoisting -> (declair the variable to top of the script & use the variable before declairing it.)]
// -> Mutable (can change value)

// Example:-
// x = 10; // Declair without using any keyword
// x = 20; // Redeclair
// x = 15; // Mutable
// console.log(y); // Hoisting (Value: undefined)
// y = 30;
// console.log(x);
