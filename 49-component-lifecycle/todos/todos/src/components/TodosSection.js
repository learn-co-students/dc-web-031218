import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TODOS_URL = "http://localhost:3000/todos";

class TodosSection extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => console.log("window was resized"));
    fetch(TODOS_URL)
      .then(resp => resp.json())
      .then(json => this.setState({ todos: json }));
  }

  addTodo(text) {
    this.setState({ todos: [...this.state.todos, { id: 3, text: text }] });
  }

  render() {
    console.log(this.props);

    return (
      <div style={{ border: `1px dashed ${this.props.color}` }}>
        <TodoForm onAdd={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

TodosSection.defaultProps = { color: "blue" };

export default TodosSection;
