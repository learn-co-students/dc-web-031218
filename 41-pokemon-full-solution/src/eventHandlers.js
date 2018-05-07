function handleSpriteToggle(event) {
  //we are attaching a listener to the pokemon-container. because this parent element will always know about what happens to its children, we can delegate the responsibility and use one event handler for ALL pokemon cards instead of separate handlers for each pokemon
  if (event.target.name === 'flip-pokemon') {
    //we named the button to make it easier to determine what the user clicked
    const targetId = parseInt(event.target.dataset.id); //data-id is always a string; our ids are integers
    const targetImg = document.querySelector(`img[data-id="${targetId}"]`); //grab the img tag we want to flip
    const targetPokemon = Pokemon.all.find(pokemon => pokemon.id === targetId); //let the pokemon flip its own card
    targetPokemon.flipPokemon(targetImg);
  }
}

function handleSearchInput(event, pokemonContainer) {
  //event is the "input" event
  const searchTerm = event.target.value.trim(); //grab whatever the user typed in and .trim() off any extra spaces

  const filteredPokemon = Pokemon.all.filter(pokemon => pokemon.name.includes(searchTerm)); //grab a filtered list of pokemon that match the user's search term

  pokemonContainer.innerHTML = filteredPokemon.map(pokemon => pokemon.render()).join(''); //update the DOM by resetting the innerHTML based on our filteredPokemon list; each instance of pokemon has a .render() method that generates a string of HTML. .map() returns an array that we can .join("") in order to create a large string of HTML
}

function handleNewPokemon(pokemonData) {
  //at the moment, we are hard-coding the pokemon data but we can imagine changing this to pass data from a form to the backend. The important aspect that I want to focus on is sending data to the backend, getting a response back, and using that response to instantiate a new pokemon

  pokemonData = {
    height: 10,
    weight: 130,
    name: 'bulbasaur',
    abilities: ['overgrow', 'chlorophyll'],
    moves: [],
    stats: [],
    types: ['grass', 'poison'],
    sprites: {
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    },
  };

  Adapter.createNewPokemon(pokemonData).then(newPokeJSON => new Pokemon(newPokeJSON));
}
