import React, { useState } from 'react';

export const AddTodo = ({onAdd}) => {
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!subject || !body) alert("Blank Values not accepted");
        else
        {
            onAdd(subject, body);
            setSubject("");
            setBody("");
        }
    }

  return (
    <div className="container">
        <h2 className="text-center my-3"><b>Add Task</b></h2>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="buject" className="form-label"><b>Subject</b></label>
                <input type="text" value={subject} onChange={(e) => {setSubject(e.target.value)}} className="form-control" id="subject"/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label"><b>Decription</b></label>
                <input type="text" value={body} onChange={(e) => {setBody(e.target.value)}}className="form-control" id="body" />
            </div>
            <button type="submit" className="btn btn-success my-3">Submit</button>
        </form>
    </div>
  );
}
