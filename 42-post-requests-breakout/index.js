console.log("Hello, monsters");

function getForm() {
  return document.querySelector(".character-form");
}

function makePostRequest(url, data) {
  // method post
  // headers
  // stringify the body
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const URL_PREFIX = "http://localhost:3000";

  class Character {
    constructor(json) {
      this.id = json.id;
      this.name = json.name;
      this.location = json.location;
      this.img = json.img;
    }

    createStringElement() {
      return `<li data-id="${this.id}">${this.name}</li>`;
    }

    createDetailElement() {}

    save() {
      // without the abstraction
      // fetch(`${URL_PREFIX}/characters`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name: this.name,
      //     location: this.location,
      //     img: this.img
      //   }),
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   }
      // });

      makePostRequest(`${URL_PREFIX}/characters`, {
        name: this.name,
        location: this.location,
        img: this.img
      });
    }
  }

  // working!
  function getPromiseForCharacters() {
    return fetch(`${URL_PREFIX}/characters`).then(res => res.json());
  }

  function appendElementToDOM(elementString, parent) {
    parent.innerHTML += elementString;
  }

  function getCharacterListElement() {
    return document.querySelector(".character-list");
  }

  function loadListOfCharactersIntoDOM() {
    return getPromiseForCharacters()
      .then(characterJsonArray => {
        let parent = getCharacterListElement();
        characterJsonArray.forEach(characterJson => {
          let char = new Character(characterJson);
          let element = char.createStringElement();
          appendElementToDOM(element, parent);
        });
      })
      .catch(error => console.error(error));
  }

  // see detail view when we click a character

  function fetchAndSwapDetailView(characterId) {
    console.log(characterId);
  }

  function attachDetailEventListener() {
    let listener = getCharacterListElement();
    listener.addEventListener("click", e => {
      fetchAndSwapDetailView(e.target.dataset.id);
    });
  }

  loadListOfCharactersIntoDOM().then(attachDetailEventListener);

  // Creating a new character

  function getFormData() {
    let name = document.querySelector("#name").value;
    let location = document.querySelector("#location").value;
    let img = document.querySelector("#img").value;
    return { name, location, img };
  }

  function addFormEventListener() {
    let form = getForm();
    form.addEventListener("submit", e => {
      e.preventDefault();
      let character = new Character(getFormData());
      character.save();
    });
  }

  addFormEventListener();
});
