import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import List from "./List";
import { v4 as uuidv4} from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoName = useRef();

  //load
  useEffect(() => {
    console.log('load')
    const storedTodos = JSON.parse(localStorage.getItem("todoApp.todos"));
    if (storedTodos) setTodos(storedTodos);
    console.log(storedTodos);
    console.log('---------')
  }, []);

  //save
  useEffect(() => {
    if (todos.length>0) {localStorage.setItem("todoApp.todos", JSON.stringify(todos));
    console.log("Setter");
    console.log(todos);
    console.log('---------')
  }
    
  }, [todos]);

  function ToggleList(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function AddList(e) {
    const name = todoName.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoName.current.value = null;
  }

  function ClearList() {
    console.log('clear')
    //console.log(todos)
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
    localStorage.setItem("todoApp.todos", JSON.stringify(newTodos))
    console.log(JSON.parse(localStorage.getItem("todoApp.todos")))
    console.log('------------')
  }

  return (
    <>
      <List todos={todos} toggleTodo={ToggleList} />
      <input ref={todoName} type="text" />
      <button onClick={AddList}>Add Todo</button>
      <button onClick={ClearList}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
