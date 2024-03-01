import { useState } from "react"
import React from 'react'

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] =useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addToDo(value)
        setValue("")
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
            type='text' 
            className='todo-input' 
            placeholder='Enter task'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        <button type='submit' className='todo-btn' >Add Task</button>
    </form>
  )
}
