import React from "react";
import { connect } from "react-redux";
import { deletePainting } from "../actions/index";

const PaintingShow = props => {
  let { painting, handleDelete } = props;
  return (
    <div className="ui card">
      <div className="image">
        <img src={painting.image} alt={painting.slug} />
      </div>
      <div className="content">
        <div className="header">{painting.title}</div>
        <div className="meta">{painting.date}</div>
        <div className="meta">
          {painting.dimensions.width} in. x {painting.dimensions.height} in.
        </div>
        <div className="meta">{painting.museum.name}</div>
        <div className="description">
          by {painting.artist.name}
          <p>
            {painting.artist.birthday} - {painting.artist.deathday}
          </p>
          <p>{painting.artist.hometown}</p>
        </div>
        <div
          onClick={() => props.handleDelete(painting.id)}
          className="ui basic red right aligned button"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: id => dispatch({ type: "DELETE_PAINTING", id: id })
  };
};

export default connect(null, mapDispatchToProps)(PaintingShow);
