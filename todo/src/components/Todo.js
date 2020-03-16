import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todo';
import TodoForm from './TodoForm';
import { Typography } from '@material-ui/core';
import { ADD_TODO } from '../actions/types';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addNewTodo = newTodo => {
        dispatch({ type: ADD_TODO, payload: {
            item: newTodo,
            completed: false,
            id: new Date().valueOf()
        }});
    }

    return (
        <div>
            <TodoForm addNewTodo={addNewTodo} />
            {state.map(todo => <Typography>{todo.item}</Typography> )}
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default Todo
