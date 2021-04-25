import React, { useState } from 'react';
import { database } from '../firebase/config';

function Form() {
    const [title, setTitle] = useState('');
    const [creator] = useState('fenris');

    const addTodo = (e) => {
        e.preventDefault();
        const todoRef = database.ref('Todo');
        const todo = {
            title, complete: false, creator:{ name:creator , role:'ADMIN'}
        }
        console.log(todo);
        todoRef.push(todo);
        setTitle('');
        
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    console.log(title);
    return (
        <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} value={title}/>
            <button className="add-btn">Add Task</button>
        </form>
    )
}

export default Form