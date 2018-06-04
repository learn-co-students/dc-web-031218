import React from "react";
import { connect } from "react-redux";
import { updateSearchText } from "./actions";

const Searchbar = props => {
  return (
    <div className="pokemon-search-form">
      <input
        onChange={props.handleChange /* dispatch the action */}
        value={props.searchText}
        className="pokemon-search-input"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(updateSearchText(e.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
