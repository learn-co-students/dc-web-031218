import React from "react";

const Todo = props => {
  return (
    <div style={{ margin: 10, border: "1px dashed yellow" }}>
      {props.todoItem.text}
    </div>
  );
};

export default Todo;
