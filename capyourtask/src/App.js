import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initialTodo;
  if (localStorage.getItem("todos") === null)
  {
    initialTodo = [];
  }
  else
  {
    initialTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initialTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    let newTodos = todos.filter((element) => {
      return element !== todo;
    })
    setTodos(newTodos);
  };

  const onAdd = (subject, body) => {
    let toadd = {
      id: todos.length,
      subject,
      body
    };
    setTodos([...todos, toadd]);
  };

  const RenderHome = () => {
    return (
      <>
      <AddTodo onAdd={onAdd}/>
      <hr />
      <Todos todos={todos} onDelete={onDelete}/>
      </>
    );
  };

  const RenderAbout = () => {
    return (
      <>
      <About />
      </>
    );
  };

  return (
    <>
      <Router>
      <Header title="CapYourTask" searchBar={false} />
      <Routes>
      <Route exact path="/" element={<RenderHome />} />
      <Route exact path="/about" element={<RenderAbout />} />
      </Routes>

      <Footer />
      </Router>
    </>
  );
}

export default App;
