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
    const { type, payload } = action;
    switch(type) {
        case ADD_TODO:
            return [ ...state, {
                item: payload.item,
                completed: payload.completed,
                id: payload.id
            }];
        case TOGGLE_COMPLETED:
            return state;
        case REMOVE_TODO:
            return state;
        default: 
            return state;
    }
}