import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todos = [
  { id: 1, text: "Step 1. Get one whole cantelope" },
  { id: 2, text: "Step 2. Get two more cantelopes" }
];

class TodosSection extends Component {
  constructor() {
    super();

    this.state = {
      todos: todos
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text) {
    this.setState({ todos: [...this.state.todos, { id: 3, text: text }] });
  }

  changeTodo(id, newText) {
    // this.setState({ updated state })
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ border: "1px dashed blue" }}>
        <TodoForm onAdd={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodosSection;
