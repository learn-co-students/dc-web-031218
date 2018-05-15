import React from "react";
import artworks from "../../data/artworks";
import Painting from "./painting";

const PaintingsList = () => (
  <ul>
    {artworks.map(painting => (
      <Painting
        key={painting.id}
        image={painting.image}
        title={painting.title}
        artist={painting.artist}
        year={painting.date}
        dimensions={painting.dimensions}
      />
    ))}
  </ul>
);

export default PaintingsList;
