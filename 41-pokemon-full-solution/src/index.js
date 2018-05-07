/*we can think of the index.js file as our `main` file, similar to `app.rb` that we saw in the ruby CLI project. This file is responsible for kicking off our application. Following this line of thought, we should grab all the DOM elements we'll need, attach event listeners to those DOM elements, and fetch the data from our backend*/
document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded"); //make sure our listener for DOMContentLoaded is working properly

  //request data from our API, which has been moved into an adapter class whose sole responsibility is communicating with the server. If there is a change to the API or any of our endpoints, we know exactly where to look if code needs to be updated
  Adapter.fetchAndSetPokemon().then(pokemonData =>
    pokemonData.forEach(pokemon => new Pokemon(pokemon))
  ); //by creating a `static` or class method on the Adapter class, we no longer need to instantiate it––https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  //select our DOM elements
  // let searchTerm = ""; //declare a variable to keep track of whatever the user typed in
  const pokemonContainer = document.getElementById("pokemon-container"); //the container where we will append elements
  pokemonContainer.addEventListener("click", handleSpriteToggle); //handleSpriteToggle is an event handler function; we know that .addEventListener will always pass the event object to its handler. therfore, if handleSpriteToggle accepts event as an arg, we can define it elsewhere and pass a reference to the function

  document
    .getElementById("pokemon-search-form")
    .addEventListener("submit", e => e.preventDefault()); //stop search form from posting when user presses enter; we could have saved this to a variable as well

  const searchInput = document.getElementById("pokemon-search-input"); //input field user types their term into
  searchInput.addEventListener("input", event =>
    handleSearchInput(event, pokemonContainer)
  ); //look closely at what's happening here; .addEventListener() accepts a function as its second argument. we've moved handleSearchInput to a separate file, which introduces a problem: handleSearchInput needs to know which piece of the DOM needs to be updated. We can fix this by passing .addEventListener an anonymous callback that will invoke handleSearchInput ONLY when the input event occurs. Walk through this a few times and make sure it's clear to you. What would happen if we did this: searchInput.addEventListener("input", handleSearchInput(event, pokemonContainer))

  const createPokemon = document.getElementById("create-pokemon");
  createPokemon.addEventListener("click", handleNewPokemon); //this button demonstrates the request response cycle; currently it posts some hard-coded data to our backend which responds with the newly created pokemon. We can imagine updating this method to accept pokemon data from a form. for now, just focus on sending data to the backend and getting something back
});
