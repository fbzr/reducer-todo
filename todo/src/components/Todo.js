import React, { useReducer, Fragment } from 'react';
import { todoReducer, initialState } from '../reducers/todo';
import TodoForm from './TodoForm';
import { Typography, List, ListItem, ListItemIcon, IconButton, Button, makeStyles, Container, Grid, Divider } from '@material-ui/core';
import { Check, Undo } from '@material-ui/icons';
import { ADD_TODO, TOGGLE_COMPLETION, CLEAR_COMPLETED } from '../actions/types';
import Moment from 'react-moment';

const styles = {
    taskCompleted: { textDecoration: 'line-through' },
    taskNotCompleted: { textDecoration: 'none' },
    listItem: {
        display: 'flex',
        flexDirection: 'column'
    }
}

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

    const clearCompletedTasks = e => {
        e.preventDefault();
        dispatch({ type: CLEAR_COMPLETED });
    }

    return (
        <Grid container direction='column' alignItems='center'>
            <Typography variant='h2' align='center'>Todo List<br/>(the return)</Typography>
            <TodoForm addNewTodo={addNewTodo} />
            <Button onClick={clearCompletedTasks}>Clear completed tasks</Button>
            <List>
                <Divider />
                {state.map(todo => (
                    <Fragment>
                        <ListItem style={styles.listItem} key={todo.id}>
                            <Grid container alignItems='center'>
                                <IconButton value={todo.id} onClick={toggleTaskCompletion}>{todo.completed ? <Undo /> : <Check />}</IconButton>
                                <Typography style={todo.completed ? styles.taskCompleted : styles.teskNotCompleted}>
                                    {todo.item}
                                </Typography>
                            </Grid>
                            <div>
                                { todo.completed ? 
                                    <Typography variant='caption'>Completed on <Moment format="MM/DD/YYYY">{todo.dateCompletion}</Moment></Typography>
                                : null }
                            </div>
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
            </List>
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        </Grid>
    )
}

export default Todo
