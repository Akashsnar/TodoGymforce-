import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    // Function to calculate completed tasks
    const completedTasks = todos.reduce((acc, todoItem) => {
      return todoItem.checked ? acc + 1 : acc;
    }, 0);

    return completedTasks;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
