import React from 'react'

export const TodoItem = ({todo, onDelete, indexis}) => {
  return (
    <div>
      <h3><b>{indexis+1}) {todo.subject}</b></h3>
      <p><i>{todo.body}</i></p>
      <button className="btn btn-sm btn-warning mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Done</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"><b>Confirm your move</b></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <big><b>Are you sure you want to delete the task ??</b></big>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={() => {onDelete(todo)}} data-bs-dismiss="modal">Yupp :{'>'}</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Not now :(</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
