import React from 'react'

export const TodoItem = ({todo, onDelete, indexis}) => {
  return (
    <div>
      <h3><b>{indexis+1}) {todo.subject}</b></h3>
      <p><i>{todo.body}</i></p>
      <button className="btn btn-sm btn-warning mb-4" onClick={() => {onDelete(todo)}}>Done</button>
    </div>
  )
}
