import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

function App() {
  const todos = [
    { id: 1, name: "Task 1", checked: true},
    { id: 2, name: "Task 2", checked: false},
    { id: 3, name: "Task 3", checked: true}
  ];

  const [items, setItems] = useState([{ id: 1, name: "Task 1", checked: true},
  { id: 2, name: "Task 2", checked: false},
  { id: 3, name: "Task 3", checked: true}]);
  return (
    <>
      <List todos={items}/>
      <input type="text" />
      <button>Add</button>
      <button>Remove</button>
    </>
  );
}

export default App;
