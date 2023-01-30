import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {

  function handleDeleteTask(taskName){
    const updatedTasks = tasks.filter(task=>task.text !== taskName)
    setTasks(updatedTasks)
  }

  return (
    <div className="tasks">
      {tasks.map(task=><Task key={task.text} category={task.category} text={task.text} handleDeleteTask = {handleDeleteTask}/>)}
    </div>
  );
}

export default TaskList;
