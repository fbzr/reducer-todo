import {
    ADD_TODO,
    TOGGLE_COMPLETION,
    REMOVE_TODO,
    CLEAR_COMPLETED
} from '../actions/types';

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: new Date().valueOf(),
    dateCompletion: ''
},
{
    item: 'Learn about redux',
    completed: false,
    id: new Date().valueOf() + 1,
    dateCompletion: ''
}]

export const todoReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case ADD_TODO:
            return [ ...state, {
                item: payload,
                completed: false,
                id: new Date().valueOf(),
                dateCompletion: ''
            }];
        case TOGGLE_COMPLETION:
            return state.map(task => task.id === parseInt(payload, 10) 
            ? {...task,
                completed: !task.completed,
                dateCompletion: new Date()
            } 
            : task);
        case REMOVE_TODO:
            return state;
        case CLEAR_COMPLETED:
            return state.filter(task => !task.completed);
        default: 
            return state;
    }
}