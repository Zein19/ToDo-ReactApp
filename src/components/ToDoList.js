import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDoTasks } from './ToDoTasks'
import { EditForm } from './EditForm'

export const ToDoList = () => {
    const [toDos, setToDos] = useState([])
    const addToDo = toDo => {
        setToDos([...toDos, {id: Math.random(), task: toDo, isCompleted:false, isEditing:false}])
        console.log(toDos)
    }

    const toggleComplete = id =>{
        setToDos(toDos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    const deleteTask = id =>{
        setToDos(toDos.filter(todo => todo.id !== id))
    }

    const editTask = id =>{
        setToDos(toDos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
    
    const updateTask = (task, id) => {
        setToDos(toDos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} :todo ))
    }
  return (
    <div className='ToDoList'>
        <h1>To Do List</h1>
        <ToDoForm addToDo={addToDo}/>
        {toDos.map((toDo, index) =>(
            toDo.isEditing ? (
                <EditForm 
                    editTask={updateTask}
                    task={toDo}
                />
            ) : 
            <ToDoTasks
                task ={toDo}
                key ={index}
                toggleComplete={toggleComplete}
                deleteTask = {deleteTask} 
                editTask={editTask}
            />
        ))}
    </div>
  )
}
