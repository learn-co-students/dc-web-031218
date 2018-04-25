# This, new and objects

- `this` and function context
- bind, call, apply
- arrow functions and context

## Objects and functions review

## this and function context

()
bind
call
apply

## Arrow functions

what will we see?

```js
function arrayTimesThis(array) {
  return array.map(function (x) {
    this.num * x
  });
}

let obj = { num: 6, multiply: arrayTimesThis }
obj.multiply([1,2,3])
```

## Objects, Factories, Prototypes, Constructors

## Class syntax

## Relationships between objects

- Create private "class" variables using the ES6 class syntax, closures, and IIFEs
- Create relationships between JS classes
- Write instance methods for JS classes
- Write class methods for JS classes (e.g. filters and search functions)
