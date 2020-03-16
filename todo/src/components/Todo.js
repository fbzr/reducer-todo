import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todo';
import TodoForm from './TodoForm';
import { Typography, List, ListItem, ListItemIcon, IconButton } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { ADD_TODO, TOGGLE_COMPLETION } from '../actions/types';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addNewTodo = newTodo => {
        dispatch({ type: ADD_TODO, payload: newTodo});
    }

    const toggleTaskCompletion = e => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        dispatch({ type: TOGGLE_COMPLETION, payload: e.currentTarget.value });
    }

    return (
        <div>
            <TodoForm addNewTodo={addNewTodo} />
            <List>
                {state.map(todo => (
                    <ListItem key={todo.id}>
                        <IconButton value={todo.id} onClick={toggleTaskCompletion}><Check /></IconButton>
                        <Typography>{todo.item}</Typography>
                    </ListItem>
                ))}
            </List>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default Todo
