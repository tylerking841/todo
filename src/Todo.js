import React from "react";
/*
When the checkbox is changed handleCheck is called
handleCheck runs what ever is passed through toggleTodo and passes the todo objects id as an argument
*/
export default function Todo({ todo, toggleTodo }) {
  //assigns id to toggle
  function handleCheck() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" check={todo.complete} onChange={handleCheck} />
        {todo.name}
      </label>
    </div>
  );
}
