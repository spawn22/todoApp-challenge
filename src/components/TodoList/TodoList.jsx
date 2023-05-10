import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import Data from "../../data.js";
import "./TodoList.css";
function TodoList() {
  const [todos, setTodos] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), title: taskName, completed: false };
    setTodos([...todos, newTask]);
  };

  const deleteTask = (taskId) => {
    const newTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(newTodos);
    if (
      (currentPage - 1) * itemsPerPage >= newTodos.length &&
      currentPage > 1
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  const editTask = (taskId, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === taskId ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const toggleCompletion = (taskId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(todos.length / itemsPerPage)) return;
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1 className="todo-title-h1">Lista de Tareas</h1>
      <AddTodo addTask={addTask} />
      {todos
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      <div className="paginated-container">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="paginated-btn"
        >
          Anterior
        </button>
        <span className="current-page-span">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="paginated-btn"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default TodoList;
