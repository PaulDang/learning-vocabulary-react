import { CREATE_NOTE, RETRIEVE_NOTES } from "../actions/types";

const initialState = [];

const todoReducer = (todos = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case CREATE_NOTE:
          return [...todos, payload];
    
        case RETRIEVE_NOTES:
          return payload;
        default:
            return todos
    }
};
export default todoReducer;