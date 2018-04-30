// const rootNode = document.getElementById("root");
// const leafNode = document.getElementById("leaf");
//
// rootNode.addEventListener("click", function(event) {
//   console.log("click event", this);
// });
// //
// // rootNode.addEventListener("click", function(event) {
// //   console.log("event target", event.target);
// // });
// //
// leafNode.addEventListener("click", function(event) {
//   console.log("from the leaf", this);
// });
//
// document.addEventListener("click", function(event) {
//   console.log("from the document", this);
// });

const puppyForm = document.getElementById("puppy-form");
const puppyName = document.getElementById("puppy-name");
const puppyAge = document.getElementById("puppy-age");
const puppyBreed = document.getElementById("puppy-breed");
const puppyButton = document.getElementById("puppy-button");
const puppiesList = document.getElementById("puppy-list");

function createPuppy(event) {
  // what is the value of 'this'?
  event.stopPropagation();
  event.preventDefault();
  const name = puppyName.value;
  const age = puppyAge.value;
  const breed = puppyBreed.value;
  console.log(
    "clicked the puppy button",
    "age",
    age,
    "name",
    name,
    "breed",
    breed
  );
  // create an element
  var item = document.createElement("li");
  item.innerText = `${name}: Age ${age}, a ${breed}`;
  // insert the element
  puppiesList.appendChild(item);
}

puppyButton.addEventListener("click", createPuppy);

// goal: handle enter in the 'breed' input
// none of the other inputs
puppyForm.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

puppyBreed.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    if (puppyBreed.value && puppyName.value && puppyAge.value) {
      createPuppy(event);
    }
  }
});
