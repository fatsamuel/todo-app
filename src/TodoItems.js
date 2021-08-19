import React from "react"
import style from "./style.css"

function TodoItem(props) {
    return (
        <div className="todo-items">
        <input type="checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p>
        </div>
    )

}

export default TodoItem;