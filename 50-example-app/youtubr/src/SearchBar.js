import React from "react";

const SearchBar = props => (
  <div>
    <input onChange={e => props.onChangeSearch(e.target.value)} />
    <button>Search</button>
  </div>
);

export default SearchBar;
