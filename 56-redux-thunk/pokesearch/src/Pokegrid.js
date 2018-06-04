import React from "react";
import Pokecard from "./Pokecard";
import { connect } from "react-redux";

const Pokegrid = props => {
  return (
    <div className="pokemon-container">
      {props.pokemon.map(p => <Pokecard key={p.name} pokemon={p} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(mapStateToProps)(Pokegrid);
