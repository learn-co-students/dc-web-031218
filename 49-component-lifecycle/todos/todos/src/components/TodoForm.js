import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  updateValue = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.value);
  };

  render() {
    return (
      <div style={{ margin: 10, border: "1px dashed purple" }}>
        <form onSubmit={this.handleSubmit}>
          New Todo:
          <input onChange={this.updateValue} value={this.state.value} />
          <button>Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
