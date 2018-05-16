import React from "react";
import Todo from "./Todo";
// "#{}"
// `${}`
// <%= %>
// {}

const TodoList = props => (
  <div style={{ margin: 10, border: "1px dashed pink" }}>
    TodoList
    <ul>{props.todos.map(item => <Todo key={item.id} todoItem={item} />)}</ul>
  </div>
);

export default TodoList;
