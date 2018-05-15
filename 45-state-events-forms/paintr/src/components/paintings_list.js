import React from "react";
import Painting from "./painting";

const PaintingsList = ({ paintings }) => (
  <ul>
    {paintings.map(painting => (
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
