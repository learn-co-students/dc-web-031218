import React, { Component } from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Pokegrid from "./Pokegrid";

class App extends Component {
  render() {
    return (
      <div className="container">
        <img
          className="pokemon-logo"
          src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"
          alt=""
        />
        <Searchbar />
        <Pokegrid />
      </div>
    );
  }
}

export default App;
