import React from "react";
import Pokecard from "./Pokecard";

const mock = [
  {
    height: 20,
    weight: 1000,
    order: 3,
    name: "venusaur",
    abilities: ["overgrow", "chlorophyll"],
    moves: [],
    stats: [
      {
        value: 100,
        name: "special-defense"
      },
      {
        value: 100,
        name: "special-attack"
      },
      {
        value: 83,
        name: "defense"
      },
      {
        value: 82,
        name: "attack"
      },
      {
        value: 80,
        name: "speed"
      },
      {
        value: 80,
        name: "hp"
      }
    ],
    types: ["grass", "poison"],
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      back:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
    }
  }
];

const Pokegrid = props => {
  return (
    <div className="pokemon-container">
      {mock.map(p => <Pokecard pokemon={p} />)}
    </div>
  );
};

export default Pokegrid;
