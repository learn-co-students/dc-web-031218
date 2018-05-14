import React from "react";
import artworks from "../../data/artworks";
import Painting from "./painting";

const PaintingsList = () => (
  <ul>{artworks.map(pntg => <Painting name={pntg.title} />)}</ul>
);

export default PaintingsList;
