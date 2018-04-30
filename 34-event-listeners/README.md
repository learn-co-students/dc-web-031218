# DOM Event Listeners

- Create event listeners
- Distinguish between event types
- Explain when and why to use event listeners
- Write event listeners as stand-alone functions and in-line functions
- Use event listeners to manipulate the DOM
- Delegate events using bubbling and the event.target
- Use or cancel default event handling and event propagation

## Event Listeners

We set up some function to handle some event

Kinds of events:
- user input (click, keyboard input, form submit)
- history navigation
- location change

function will be called at some later time

## Propagation

Events 'bubble up' the tree of nodes

The order that they are called in is:
- innermost first
- which event listener was registered first

Stop the propagation with `event.stopPropagation`

## Default Behavior

most native events have a default behavior

we can stop that behavior with `event.preventDefault`

## Other behaviors

`event` is a special keyword in an event - bound to the event

`this` is the node that was listening for the event


## Resources

Excellent talk about the event loop, plus a tool for visualizing javascript execution
http://latentflip.com/loupe
