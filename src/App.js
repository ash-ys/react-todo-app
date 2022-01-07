import React, {useState} from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
    <p>React Todo</p>
    </div>
  );
}

export default App;
