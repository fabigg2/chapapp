import { types } from "../types";

const initialState = [

];

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.chatAddMessage:
            state.push(action.payload);
            return [...state];
        case types.chatMessages:
            state = action.payload;
            return [...state];
        case types.chatEditeMessage:
            const index = state.findIndex(msg => msg._id === action.payload._id);
            state[index] = action.payload;
            return [...state];
        default:
            return state;
    }
}
