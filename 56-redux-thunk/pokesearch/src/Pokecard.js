import React from "react";

const Pokecard = props => {
  return (
    <div className="pokemon-container">
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
export default Pokecard;
