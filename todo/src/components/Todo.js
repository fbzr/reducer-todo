import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todo';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div>
            {state.map(todo => <p>{todo.item}</p> )}
        </div>
    )
}

export default Todo
