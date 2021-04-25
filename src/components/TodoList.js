import React, { useState, useEffect } from 'react';
import { database } from '../firebase/config';
import Todo from './Todo';

function TodoList() {

    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = database.ref('Todo');

        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            let todoList = [];
            for(let id in todos){
                todoList.push({id, ...todos[id]});
            }
            setTodoList(todoList);
        });
    }, []);
    console.log('TodoList', todoList);
    return (
        <div>
            {todoList ? 
                todoList.map((todo, index) => <Todo todo={todo} key={index}/>) : ''
            }
        </div>
    )
}

export default TodoList
