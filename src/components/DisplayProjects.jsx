import React, { useRef, memo } from "react";

export default function DisplayProjects({ projects, addTask, removeTask, removeProject }) {
  console.log("DisplayProjects");
  const tasksRef = useRef();

  function handleAddTasks() {
    if (tasksRef.current.value === "") {
      return;
    }

    addTask(tasksRef.current.value);
    tasksRef.current.value = "";
  }

  return (
    <div className="gap-4 text-lg h-full w-10/12 flex-grow-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl mt-3 font-mono font-extrabold text-center">
          {projects.title }
        </h1>
        <button onClick={removeProject}>Delete</button>
      </div>
      <h2>Due date: {projects.date}</h2>
      <h3>Description: {projects.description}</h3>
      <hr />
      <h4 className="font-bold font-mono text-3xl opacity-70">Tasks</h4>
      <input placeholder="Go fishing" className="text-black rounded-md pl-1 text-md" type="text" ref={tasksRef} />
      <button onClick={handleAddTasks} className="pl-2">Add Task</button>
      <ul>
        {projects.tasks.map((task, taskIndex) => (
          <div className="flex items-baseline justify-between" key={taskIndex}>
             <li>{task}</li>
             <button onClick={() => removeTask(taskIndex)}>remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
