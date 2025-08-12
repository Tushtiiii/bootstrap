import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const InputChange = (e) => {
    setTitle(e.target.value);
    setError("");
  };

  const AddTask = () => {
    if (title.trim() === "") {
      setError("Task title cannot be empty");
      return;
    }

    setTodos([...todos, title]);
    setTitle("");
  };

  const DeleteTask = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container-sm text-center  w-50 mt-5 p-5 border">
        <h1>To-Do App</h1>
        <p className="lead">Add your tasks below</p>
        <hr />
        <div className="input-group mb-3 ">
          <input
            type="text"
            value={title}
            onChange={InputChange}
            placeholder="Enter task title"
            className="form-control "
          />
          <button onClick={AddTask} type="button" className="btn btn-primary">
            Add
          </button>
        </div>
        {error && <p className="danger">{error}</p>}
        <ul className="list-group p-3">
          {todos.map((todo, index) => (
            <li key={index} className="d-flex justify-content-between  p-3">
              <p>{todo} </p>
              <button
                type="button"
                onClick={(index) => {DeleteTask(index);}}
                className="btn btn-danger"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
