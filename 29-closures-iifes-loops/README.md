# Closures, IIFEs, Callbacks, Loops

- First Class Functions
- Functional Programming Paradigms
- Closures
- Callbacks
- Callbacks in Array Methods
- IIFEs

## Questions
- why do we need a special syntax to avoid mutating objects?
  - to avoid mutating them
- hashes?
- for..of, for..in
- forEach, map, filter, reduce

## First Class Functions

Go anywhere a value goes

## Functional Programming Paradigms
Declarative versus imperative

Imperative (procedural)
- How to do some operation
- Based on statements such as if, for, and/or switch

Declarative
- What operations to do
- Based on expressions which resolve to a value

Pure functions
- Given the same inputs, the function will always return the same output
- Has no side-effects, meaning it doesn't change anything in the program
- Things that are side effects
  * Modifying any external variable or object property
  * Logging to the console
  * Writing to the screen
  * Writing to a file
  * Writing to the network
  * Triggering any external process
  * Calling any other functions with side-effects

```
function add(a, b) { return a + b }
```

Avoid shared state
  * Don't use variables/data from outside of the function
Avoid mutating state
  * Creating new objects: Object.assign
  * Shallow immutability: Object.freeze

References
* Quick Read - [Medium](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
* In depth read - [Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

## Higher-order functions and reusability

- Abstract or isolate actions, effects, or async flow control using callback functions, promises
- Create utilities which can act on a wide variety of data types (think functional library)
- Partial application of a function to its arguments or create a curry-able function for the purpose of reuse or function composition
- Take a list of functions and return some composition of those input functions

## References
* Simple Explanation of Higher Order Functions - [Quora](https://www.quora.com/What-is-a-simple-explanation-of-higher-order-functions-and-callbacks-in-JavaScript)
* Eloquent JavaScript HOF - [ebook](http://eloquentjavascript.net/05_higher_order.html)
* [Sitepoint](https://www.sitepoint.com/higher-order-functions-javascript/)
* [Currying and Partial Application](https://medium.com/wdstack/javascript-function-composition-currying-and-partial-application-5a04107530ee)

## Function composition

Combine two or more functions to perform some computation
* f(g(x))
Combine two or more functions to produce a new function
* f(g)(x) === f(g(x))

[Article](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)

## Memoization
  [Good article](https://addyosmani.com/blog/faster-javascript-memoization/)


## Array methods .forEach, .map, .filter, .reduce

### Examples

```js
 // forEach passing function definition
 let arr = [1, 2, 3, 4, 5];
 arr.forEach(num => console.log(num);)
 // => 1
 // => 2
 // => 3
 // => 4
 // => 5

 // forEach passing function by reference
 arr.forEach(console.log);
 // => 1 0 (5) [1, 2, 3, 4, 5]
 // => 2 1 (5) [1, 2, 3, 4, 5]
 // => 3 2 (5) [1, 2, 3, 4, 5]
 // => 4 3 (5) [1, 2, 3, 4, 5]
 // => 5 4 (5) [1, 2, 3, 4, 5]

 // map passing function definition
 let numsTimesThree = arr.map(num => num * 3);
 numsTimesThree; // => [3, 6, 9, 12, 15]

 // filter passing function definition
 let numsLessThanTen = numsTimesThree.filter(num => num < 10);
 numsLessThanTen; // => [3, 6, 9]

 // reduce passing function definition
 let sum = numsLessThanTen.reduce((acc, val, ind) => acc + val);
 sum; // => 18

 // All of the above chained together
 arr.map(num => num * 3)
 .filter(num => num < 10)
 .reduce((acc, val, ind) => acc + val)
 // => 18
 ```


## Closures

## Callbacks in Array Methods
