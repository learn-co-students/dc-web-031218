import React from "react";
import { connect } from "react-redux";

const MuseumPicker = ({ galleryFilter, updateFilter }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          onClick={() => updateFilter("All Museums")}
          className={`item ${galleryFilter == "All Museums" ? "active" : ""}`}
        >
          All Museums
        </div>
        <div
          onClick={() =>
            updateFilter("National Gallery of Art, Washington D.C.")
          }
          className={`item ${
            galleryFilter == "National Gallery of Art, Washington D.C."
              ? "active"
              : ""
          }`}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    galleryFilter: state.galleryFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: filter => dispatch({ type: "UPDATE_FILTER", filter })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MuseumPicker);
