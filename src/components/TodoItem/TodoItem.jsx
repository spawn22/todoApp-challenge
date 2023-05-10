import PropTypes from "prop-types";
import { useState } from "react";
import "./TodoItem.css";
function TodoItem({ todo, deleteTask, editTask, toggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="card">
    <div className="todo-item-conteiner">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(todo.id)}
        
      />
      {!isEditing ? (
        <>
          <span className={`todo-title ${todo.completed ? 'todo-title-completed' : ''}`}>{todo.title}</span>
          <button onClick={handleEdit} className="list-todo_btn">Editar</button>
        </>
      ) : (
        <>
          <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="edit-input"/>
          <button onClick={handleSave} className="list-todo_btn">Guardar</button>
          </>
      )}
      <button onClick={() => deleteTask(todo.id)} className="list-todo_btn">Eliminar</button>
    </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
};

export default TodoItem;
