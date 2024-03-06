import * as React from "react";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    // Function to add todo
    if (task.trim() !== "") { // Check if task is not empty or only whitespace
            setTodos([...todos, { id: todos.length + 1, label: task, checked: false }]);
            setTask(""); // Clear the input field after adding the todo
          }

   console.log(todos);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};



// import React from "react";
// import { useState } from "react";

// export const TodoForm = (props) => {
//   const { todos, setTodos } = props;
//   const [task, setTask] = useState("");

//   const handleAddTodo = () => {
//     if (task.trim() !== "") { // Check if task is not empty or only whitespace
//       setTodos([...todos, { id: todos.length + 1, label: task, checked: false }]);
//       setTask(""); // Clear the input field after adding the todo
//     }
//   };

//   const handleKeyUp = (e) => {
//     if (e.keyCode === 13) {
//       handleAddTodo();
//     }
//   };

//   return (
//     <div className="todo-form">
//       <input
//         placeholder="Enter new task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         onKeyUp={handleKeyUp}
//       />
//       <button type="button" onClick={handleAddTodo}>
//         Add task
//       </button>
//     </div>
//   );
// };
