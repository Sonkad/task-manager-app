import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import '../App.css';




export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };



  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    alert("Task deleted!");
  };




  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    alert("Task completed!");
  };



  return (
    <div>
      <h1>NARXOZ TASK MANAGER</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );



}
