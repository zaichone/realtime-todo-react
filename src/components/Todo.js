import React, { useState, useEffect } from 'react';
import { database } from '../firebase/config';

function Todo({todo}) {

    const todoRef = database.ref('Todo').child(todo.id);
    const deleteTodo = () => {
        todoRef.remove();
    }

    const completeTodo = () => {
        todoRef.update({
            complete: !todo.complete
        });
    }
    
    return (
        <div>
            <h1 className={todo.complete? 'completed':''}>{todo.title}</h1>      
            <button className="delete-btn" onClick={deleteTodo}>Delete Task</button>     
            <button className="complete-btn" onClick={completeTodo}>Complete Task</button> 
        </div>
    )
}

export default Todo
