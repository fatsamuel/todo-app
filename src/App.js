import React from "react"
import TodoItem from "./TodoItems"
//import style from "./style.css"
import todosData from "./todoData";

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map (todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })

  }
  render () {
    const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
      handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        {TodoItems}
      </div>
    )
  }
}
export default App;

/*   "as function"
function App() {
  const TodoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
    <div className="todo-list">
      {TodoItems}
    </div>
  );
}

export default App;  */
