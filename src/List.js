import React from "react";
import Todo from "./Todo";
/*
Stores array of todo objects
*/
export default function List({ todos, toggleTodo  }) {
  return (
    todos.map(todo => {
    //for every index in items return a todo with a unique key
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  })
  )
}