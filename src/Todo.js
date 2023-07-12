import React from "react";
//returns values passed from todo
export default function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.checked} />
      {todo.name}
    </div>
  );
}
