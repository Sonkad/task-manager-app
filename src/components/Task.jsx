import React from "react";



export default function Task({ task, deleteTask, completeTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={() => completeTask(task.id)}>COMPLETE</button>
      <button onClick={() => deleteTask(task.id)}>DELETE</button>
    </li>
  );


}
