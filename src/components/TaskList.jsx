import React from "react";
import Task from "./Task";




export default function TaskList({ tasks, deleteTask, completeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </ul>
  );
  
}
