# JS Functions

We'll keep seeing
- Syntax
- Differences between ruby and js
- JS 'Razors' - gotchas

This lecture:
- statements vs expressions
- functions are objects
  - Assign functions to variables
  - Pass functions as arguments to functions
  - Return functions inside functions
  - arrow syntax
- Scope
- Closures
- IIFEs

## How to learn a new language
- how do I run code?
- debug
- *syntax*
- datatypes
- standard library
- *common patterns*
- exploring popular libraries and frameworks
- docs

## Datatypes

Primitive -- passed by value (immutable)
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
----
Object
- Object

## Statements vs. Expressions

What are the different ways we can create a function?

## Functions _are_ objects

'callbacks'

## Scope

## Game #2: Scope game

```js

// function scope

function updateMammal() {
  var bird = 'penguin';
}

console.log(bird);

/****************************************************/

// if statement
var mammal = "alpaca";
if (true) {
  var mammal = "platypus";
}
console.log(mammal);

/****************************************************/

// let vs. var
let mammal = "alpaca";
if (true) {
  let mammal = "platypus";
}
console.log(mammal);

/****************************************************/

// more about let

if(true) {
  let mammal = "alpaca";
  let mammal = "platypus";
}

console.log(mammal);

/****************************************************/

// let vs const
if (true) {
  let mammal = "camel";
  mammal = "dromedary";
  console.log(mammal);
}

if (true) {
  const mammal = "camel";
  mammal = "dromedary";
  console.log(mammal);
}

/****************************************************/

// in a function
var mammal = "echidna";
function updateMammal() {
  var mammal = "capybara";
}

updateMammal();
console.log(mammal);

/****************************************************/

// function, part 2

var mammal = "echidna";
function updateMammal() {
  mammal = "capybara";
}
updateMammal();
console.log(mammal);
```

### 'closures'

Remember Deli counter?

## IIFEs

## Javascript 'Razors'

From before:
- Number type - it's everything
- NaN (Infinity, -Infinity)
- Get 'bad' values instead of errors
- More falsy things
- null is weird

New Danger:
- globals
- shadowing
