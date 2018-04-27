# The DOM

## SWBATs
- Define the DOM and DOM nodes
- Use the Chrome Developer tools to debug
- Query the DOM using CSS selectors
- Manipulate the DOM by adding, removing, and editing the properties of DOM elements
- Define the BOM and know where to look up Browser objects
- Add event listeners to DOM elements

## What is the browser doing?


## Browser
gets an html document
parses it (turns it into objects in its memory)
'runs'
runs scripts that give developers access to its objects

```js
elements.forEach((text)=> nodes.push(new DomNode(text)))
```

## DOM
Document Object Model
Tree
Made up of Nodes
Access properties of those nodes


## Nodes

## Selectors

CSS
Cascading Style Sheets
Selectors
Styles
controls the appearance of elements

Find objects using browser utilities like document.querySelector, getElementById

## Updating Elements

via their properties
through methods

## BOM

- timers
- console
- history
- navigator
- location
- localStorage

## Creating and Adding Elements

- templates and innerHTML
- createElement and append


## Bonus

```js
document.addEventListener('mouseover', function(event){
event.path[0].innerHTML = "<img src='http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/33/0566.png'>" })
```
