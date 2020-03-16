export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: new Date().valueOf()
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}