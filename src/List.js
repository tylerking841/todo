import React from "react";
import Todo from "./Todo";
//loops over array of items and prints them out
export default function List({ todos }) {
  return (
    todos.map(todo => {
    //for every index in items return a todo with a unique key
    return <Todo key={todo.id} todo={todo} />;
  })
  )
}