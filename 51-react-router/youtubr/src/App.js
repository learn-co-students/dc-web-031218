import React, { Component } from "react";
import YouTubeContainer from "./YouTubeContainer";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <YouTubeContainer />
      </div>
    );
  }
}

export default App;
