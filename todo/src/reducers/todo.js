import {
    ADD_TODO,
    TOGGLE_COMPLETED,
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
    id: new Date().valueOf()
}]

export const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state;
        case TOGGLE_COMPLETED:
            return state;
        case REMOVE_TODO:
            return state;
        default: 
            return state;
    }
}