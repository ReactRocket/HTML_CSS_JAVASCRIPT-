/*

1) Primitive Data Types: immutable

Type	    typeof          
Null	    "object"	   
Undefined	"undefined"	   
Boolean	    "boolean"	   
Number	    "number"	   
BigInt	    "bigint"	   
String	    "string"	   
Symbol	    "symbol"	

{

    a) Null type
    The Null type is inhabited by exactly one value: null.

    b) Undefined type
    -> The Undefined type is inhabited by exactly one value: undefined.
    -> A return statement with no value (return;) implicitly returns undefined.
    -> Accessing a nonexistent object property (obj.iDontExist) returns undefined.
    -> A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
    -> Many methods, such as Array.prototype.find() and Map.prototype.get(), return undefined when no element is found.

    c) Boolean type
    -> The Boolean type represents a logical entity and is inhabited by two values: true and false.
    -> Boolean values are usually used for conditional operations, including ternary operators, if...else, while, etc.

    d) Number type
    -> The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER). Outside this range, JavaScript can no longer safely represent integers; they will instead be represented by a double-precision floating point approximation. You can check if a number is within the range of safe integers using Number.isSafeInteger().

    *-> NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

    e) BigInt type
    -> The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers.
    -> A BigInt is created by appending n to the end of an integer or by calling the BigInt() function.

    f) String type
    -> The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units. Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on. The length of a string is the number of UTF-16 code units in it, which may not correspond to the actual number of Unicode characters.
    -> JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. String methods create new strings based on the content of the current string — for example:

    EX:-
    -> A substring of the original using substring().
    -> A concatenation of two strings using the concatenation operator (+) or concat().


    g) Symbol type
    -> A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

}

2) Non-primitive Data Types: mutable

Object    : {}
Array     : []
Function  : () => {}
Date      : new Date()

*/
