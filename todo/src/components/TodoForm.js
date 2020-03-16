import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const TodoForm = ({ addNewTodo }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addNewTodo(newTask);
        setNewTask('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField value={newTask} onChange={e => setNewTask(e.target.value)} type='text' name='newTask' id='newTask' />
            <IconButton disabled={newTask === ''} type='submit'>
                <Add />
            </IconButton>
            <pre>{JSON.stringify(newTask, null, 2)}</pre>
        </form>
    )
}

export default TodoForm
