import { useState } from "react"
import React from 'react'

export const EditForm = ({editTask, task}) => {
    const [value, setValue] =useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id)
        setValue("")
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
            type='text' 
            className='todo-input' 
            placeholder='Edit task'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        <button type='submit' className='todo-btn' >Update Task</button>
    </form>
  )
}