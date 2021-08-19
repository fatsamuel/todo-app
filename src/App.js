import React from "react"
import TodoItem from "./TodoItems"
//import style from "./style.css"
import todosData from "./todoData";

function App() {
  const TodoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
    <div className="todo-list">
      {TodoItems}
    </div>
  );
}

export default App;
