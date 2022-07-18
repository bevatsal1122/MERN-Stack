import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let listStyle = {
    minHeight: "20.2vh"
  }
  return (
    <div className="container" style={listStyle}>
      <h2 className="text-center my-4"><b>Tasks List</b></h2>
      { props.todos.length>=1 ? props.todos.map((oneTodo) => {
        return <TodoItem todo={oneTodo} key={oneTodo.id} onDelete={props.onDelete} indexis={props.todos.indexOf(oneTodo)}/>
      }) : <h3><b>You're winning!!</b></h3> }
    </div>
  )
}
