import { UPDATE_SEARCH_TEXT, UPDATE_POKEMON, FETCH_POKEMON } from "./reducer";

export function updateSearchText(value) {
  return { type: UPDATE_SEARCH_TEXT, value };
}

export function updatePokemon(pokemons) {
  return { type: UPDATE_POKEMON, pokemons };
}

const pokeUrl = "http://localhost:3001/pokemons";

// we want to be able to dispatch from here!
// double 'return' - do multiple actions from one action creator

export function fetchPokemon() {
  const thunk = function(dispatch, getState) {
    fetch(pokeUrl)
      .then(res => res.json())
      .then(pokemons => dispatch(updatePokemon(pokemons)));

    dispatch({ type: FETCH_POKEMON });
  };
  return thunk;
}
