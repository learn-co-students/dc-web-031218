import React from "react";
import { connect } from "react-redux";
import { updateSearchText } from "./actions";

const Pokecard = props => {
  return (
    <div
      onClick={() => props.handleClick(props.pokemon.name)}
      className="pokemon-container"
    >
      <div
        className="pokemon-frame"
        style={{
          width: "230px",
          margin: "10px",
          background: "#fecd2f",
          color: "#2d72fc"
        }}
      >
        <h1 className="center-text">{props.pokemon.name}</h1>
        <div style={{ width: "239px", margin: "auto" }}>
          <div style={{ width: "96px", margin: "auto" }}>
            <img alt={props.pokemon.name} src={props.pokemon.sprites.front} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: text => dispatch(updateSearchText(text))
  };
};
export default connect(null, mapDispatchToProps)(Pokecard);
