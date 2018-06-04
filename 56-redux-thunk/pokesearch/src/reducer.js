import { combineReducers } from "redux";

const initialState = {
  searchText: "",
  pokemon: [],
  loading: false
};

export const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";
export const UPDATE_POKEMON = "UPDATE_POKEMON";
export const FETCH_POKEMON = "FETCH_POKEMON";

//        searchTextReducer pokemonReducer
// ust           x               _x_?
// up           _0_               x

const searchTextReducer = (state = initialState.searchText, action) => {
  if (action.type === UPDATE_SEARCH_TEXT) {
    return action.value;
  }
  return state;
};

const pokemonReducer = (state = initialState.pokemon, action) => {
  if (action.type === UPDATE_POKEMON) {
    return action.pokemons;
  }
  return state;
};

const loadingReducer = (state = initialState.loading, action) => {
  if (action.type === FETCH_POKEMON) {
    return true;
  }
  if (action.type === UPDATE_POKEMON) {
    return false;
  }
  return state;
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  pokemon: pokemonReducer,
  loading: loadingReducer
});

export default rootReducer;
