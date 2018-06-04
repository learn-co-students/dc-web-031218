import React, { Component } from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Pokegrid from "./Pokegrid";
import { connect } from "react-redux";
import { fetchPokemon } from "./actions";

class App extends Component {
  componentDidMount() {
    // dispatch some action
    // load the pokemon into the store
    this.props.onLoad();
  }

  render() {
    return (
      <div className="container">
        <img
          className="pokemon-logo"
          src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"
          alt=""
        />
        <Searchbar />
        {this.props.loading ? "Loading..." : null}
        <Pokegrid />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      const actionToDispatch = fetchPokemon();
      dispatch(actionToDispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
