import  { useState } from "react";
import PropTypes from "prop-types";
import "./AddTodo.css"
function AddTodo({addTask}) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(taskName)
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Agregar Tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="add-todo_input"
        />
        <button type="submit" className="add-todo_btn">Agregar</button>
    </form>
  )
}

AddTodo.propTypes = {
    addTask:  PropTypes.func.isRequired
}

export default AddTodo;
