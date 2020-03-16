import {
    ADD_TODO,
    TOGGLE_COMPLETION,
    REMOVE_TODO
} from '../actions/types';

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: new Date().valueOf()
},
{
    item: 'Learn about redux',
    completed: false,
    id: new Date().valueOf() + 1
}]

export const todoReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case ADD_TODO:
            return [ ...state, {
                item: payload,
                completed: false,
                id: new Date().valueOf()
            }];
        case TOGGLE_COMPLETION:
            return state.map(task => task.id === parseInt(payload, 10) ? {...task, completed: !task.completed} : task);
        case REMOVE_TODO:
            return state;
        default: 
            return state;
    }
}