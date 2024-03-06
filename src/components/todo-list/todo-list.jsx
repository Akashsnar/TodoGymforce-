import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    // Function to delete task
    const updatedTodos = todos.filter(todoItem => todoItem.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Function to toggle task
    const updatedTodos = todos.map(todoItem => {
      if (todoItem.id === id) {
        return { ...todoItem, checked: !todoItem.checked };
      }
      return todoItem;
    });
    setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content" style={{display:'flex', flexDirection: "column"}}>
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
