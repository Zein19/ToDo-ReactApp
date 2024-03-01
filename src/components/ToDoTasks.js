import React from 'react'


export const ToDoTasks = ({task, toggleComplete, deleteTask, editTask}) => {
  return (
    <div className='todo-tasks'>
        <p className={`${task.isCompleted ? 'Completed':""}`} onClick={() => toggleComplete(task.id)}>
            {task.task}
        </p>
        <div>
        <button onClick={() => editTask(task.id)}>edit</button>
        <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
    </div>
  )
}
