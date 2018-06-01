import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
console.log("actions", actions);

const PaintingListItem = ({ painting, selectPainting }) => {
  return (
    <div onClick={() => selectPainting(painting.id)} className="ui item">
      <span style={{ cursor: "pointer" }}>{painting.title}</span>
    </div>
  );
};

// shorthand expands to, effectively
// const mapDispatchToProps = dispatch => ({
// fetchPaintings: (...args) => dispatch(fetchPaintings(...args)),
// selectPainting: (...args) => dispatch(selectPainting(...args))
// });

// connect(mapStateToProps, mapDispatchToProps)
export default connect(null, actions)(PaintingListItem);
