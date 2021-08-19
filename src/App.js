import React from "react"
import TodoItems from "./TodoItems"
import style from "./style.css"

function App() {
  return (
    <div className="todo-list">
      <TodoItems />
      <TodoItems />
      <TodoItems />
    </div>
  );
}

export default App;
