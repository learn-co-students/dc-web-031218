import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodosSection extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text) {
    this.setState({ todos: [...this.state.todos, { id: 3, text: text }] });
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
