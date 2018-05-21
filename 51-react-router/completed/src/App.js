import React, { Component } from "react";
import { Route } from "react-router-dom";
import YouTubeContainer from "./YouTubeContainer";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route
          path={["/login", "/search/:query", "/video/:id", "/", "*"]}
          component={YouTubeContainer}
        />
      </div>
    );
  }
}

export default App;
