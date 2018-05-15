import React from "react";

const Painting = props => {
  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <img src={props.image} />
      <div>
        <h4>
          "{props.title}" by {props.artist.name}
        </h4>
        <p>{props.year}</p>
        <p>
          {props.dimensions.width} in. x {props.dimensions.height} in.
        </p>
      </div>
    </li>
  );
};

export default Painting;
