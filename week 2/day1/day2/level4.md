# Javascript quiz  (Basic Level 4) -

| Name | Email | Address |
|------|-------|---------|
|vikas bairwa| vb334531@gmail.com |sanganer jaipur|
# Theory
1. What are anonymous functions in JavaScript?

>>Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name

2. Explain strict comparison and Abstract comparison in javascript?

>>The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
```
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false

```


3. Difference b/w arrow functions and regular functions?

>>Arrow functions – a new feature introduced in ES6 – enable writing concise functions in JavaScript. While both regular and arrow functions work in a similar manner, yet there are certain interesting differences between them
## Syntax of regular functions:-
```
let x = function function_name(parameters){
// body of the function
};

```
## The syntax of arrow functions:-
```
let x = (parameters) => {
	// body of the function
};

```
4. What is Hoisting in JavaScript?
>> - Source(MDN) JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
>> - One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
## Types of hoisting
 >> - function hoisting
 >>  - variable hoisting
 >> - class hoisting
 >> - 

```
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");
/*
The result of the code above is the same: "My cat's name is Tiger"
*/

```

5.  JavaScript is a garbage collected programming language, explain how?

>>- JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
>>- Regardless of the programming language, the memory life cycle is pretty much always the same:
>>- Allocate the memory you need In order to not bother the programmer with allocations, JavaScript will automatically allocate memory when values are initially declared.

```
const n = 456; // allocates memory for a number
const s = "bombay"; // allocates memory for a string

```

6. 6. Explain Shallow copy vs Deep copy in Javascript?

>>- A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
>>- A shallow copy means that certain (sub-)values are still connected to the original variable. To really understand copying, you have to get into how JavaScript stores values.

7. What is Object.freeze
>>A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being change




## Programs
-----------

1. . Write a function that generates a random number between two ranges, -100 to 0 and
800 - 900.
```

z=Math.random();
z=900*Math.random() // 0 to 900
z=800+(900-800)* Math.random() // 8000 to 900
z=Math.ceil(800+(900-800)*Math.random()); //perfect integer no no decimal
console.log(z);
```