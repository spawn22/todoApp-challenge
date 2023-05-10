import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import Data from "../../data.js";
import "./TodoList.css"
function TodoList() {
  const [todos, setTodos] = useState(Data);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), title: taskName, completed: false };
    setTodos([...todos, newTask]);
  };

  const deleteTask = (taskId) => {
    setTodos(todos.filter((todo) => todo.id !== taskId));
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

  return (
    <div>
      <h1 className="todo-title-h1">Lista de Tareas</h1>
      <AddTodo addTask={addTask}/>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
}

export default TodoList;
