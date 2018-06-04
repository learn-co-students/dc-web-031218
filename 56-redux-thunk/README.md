# More Redux Patterns


## Reducers are supposed to be 'pure'
No side effects
no fetches!

## Pokesearch

App
  Searchbar - search text
  Pokegrid - [pokemon]

store
  {
    searchText: ""
    pokemon: [],
  }

actions
  updateSearchText - :check:
  updatePokemon - (likely dispatched when App loads)

## Fetching data

use componentDidMount
dispatch an action after the data loads

## Showing a spinner

## Redux Thunk

a thunk is a function
  it gets dispatch and getState
