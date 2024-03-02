import React from 'react'


export const ToDoTasks = ({task, toggleComplete, deleteTask, editTask}) => {
  return (
    <div className='todo-tasks'>
        <p className={`${task.isCompleted ? 'Completed':""}`} onClick={() => toggleComplete(task.id)}>
            {task.task}
        </p>
        <div>
        <button className='edit-btn' onClick={() => editTask(task.id)}>Edit</button>
        <button className='delete-btn' onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    </div>
  )
}
